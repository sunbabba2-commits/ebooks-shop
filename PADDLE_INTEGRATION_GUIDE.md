# Paddle支付集成指南

本项目已完整集成Paddle支付系统,替代了原有的Shopify Checkout。

## 📋 目录

1. [功能概述](#功能概述)
2. [环境配置](#环境配置)
3. [Paddle后台设置](#paddle后台设置)
4. [产品价格映射](#产品价格映射)
5. [测试支付流程](#测试支付流程)
6. [Webhook配置](#webhook配置)
7. [常见问题](#常见问题)

## 功能概述

### 已实现的功能

- ✅ Paddle SDK集成
- ✅ 购物车Paddle支付按钮
- ✅ 支付成功页面
- ✅ 支付取消页面
- ✅ Webhook处理
- ✅ 支付事件监听
- ✅ 中文界面支持

### 文件结构

```
lib/paddle/
├── config.ts          # Paddle配置
├── types.ts           # TypeScript类型定义
├── client.ts          # 客户端SDK封装
└── server.ts          # 服务端API封装

app/
├── checkout/
│   ├── success/       # 支付成功页面
│   └── canceled/      # 支付取消页面
└── api/
    └── paddle/
        └── webhook/   # Webhook处理

components/cart/
└── modal.tsx          # 集成Paddle支付的购物车
```

## 环境配置

### 1. 复制环境变量

```bash
cp .env.example .env.local
```

### 2. 配置Paddle环境变量

在 `.env.local` 文件中添加以下配置:

```env
# Paddle支付配置
NEXT_PUBLIC_PADDLE_ENVIRONMENT="sandbox"  # 或 "production"
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN="your_paddle_client_token"
NEXT_PUBLIC_PADDLE_VENDOR_ID="your_paddle_vendor_id"
PADDLE_API_KEY="your_paddle_api_key"
PADDLE_WEBHOOK_SECRET="your_paddle_webhook_secret"
```

### 环境变量说明

| 变量名 | 说明 | 获取位置 |
|--------|------|----------|
| `NEXT_PUBLIC_PADDLE_ENVIRONMENT` | 环境模式 | `sandbox` 或 `production` |
| `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN` | 客户端令牌 | Paddle后台 > Developer Tools > Authentication |
| `NEXT_PUBLIC_PADDLE_VENDOR_ID` | 供应商ID | Paddle后台 > Developer Tools > Authentication |
| `PADDLE_API_KEY` | API密钥 | Paddle后台 > Developer Tools > Authentication |
| `PADDLE_WEBHOOK_SECRET` | Webhook密钥 | Paddle后台 > Developer Tools > Notifications |

## Paddle后台设置

### 1. 注册Paddle账号

1. 访问 [Paddle官网](https://www.paddle.com/)
2. 注册账号并完成验证
3. 选择Sandbox环境进行测试

### 2. 获取API凭证

1. 登录Paddle后台
2. 进入 **Developer Tools > Authentication**
3. 创建新的API密钥
4. 复制以下信息:
   - Client-side token (客户端令牌)
   - Vendor ID (供应商ID)
   - API Key (API密钥)

### 3. 创建产品和价格

#### 方式一: 通过Paddle后台手动创建

1. 进入 **Catalog > Products**
2. 点击 **Create Product**
3. 填写产品信息:
   - Name (产品名称)
   - Description (描述)
   - Tax Category (税收类别)
   - Image URL (产品图片)
4. 创建价格:
   - 点击 **Add Price**
   - 设置价格金额和货币
   - 选择计费周期(一次性或订阅)
5. 记录 **Price ID**,用于映射

#### 方式二: 通过API创建

```typescript
import { paddleServer } from 'lib/paddle/server';

// 创建产品
const product = await paddleServer.createProduct({
  name: '产品名称',
  description: '产品描述',
  taxCategory: 'standard',
  imageUrl: 'https://example.com/image.jpg'
});

// 创建价格
const price = await paddleServer.createPrice({
  productId: product.id,
  description: '一次性购买',
  unitPrice: {
    amount: '2999',  // 29.99美元
    currencyCode: 'USD'
  }
});

console.log('Price ID:', price.id);
```

## 产品价格映射

### 重要提示

⚠️ **必须将Shopify产品ID映射到Paddle Price ID**

当前实现中,购物车使用Shopify产品ID作为占位符。你需要创建一个映射表:

### 创建映射文件

创建 `lib/paddle/product-mapping.ts`:

```typescript
// Shopify产品ID到Paddle Price ID的映射
export const PRODUCT_PRICE_MAPPING: Record<string, string> = {
  // Shopify产品ID: Paddle Price ID
  'gid://shopify/Product/123456': 'pri_01h1vjes1y163xfj1rh1tkfb65',
  'gid://shopify/Product/789012': 'pri_01h1vjf2k3m4n5p6q7r8s9t0u1',
  // 添加更多映射...
};

export function getPaddlePriceId(shopifyProductId: string): string {
  const priceId = PRODUCT_PRICE_MAPPING[shopifyProductId];
  if (!priceId) {
    throw new Error(`No Paddle price mapping found for product: ${shopifyProductId}`);
  }
  return priceId;
}
```

### 更新购物车代码

修改 `components/cart/modal.tsx` 中的 `handleCheckout` 函数:

```typescript
import { getPaddlePriceId } from 'lib/paddle/product-mapping';

const handleCheckout = async () => {
  // ...
  const items = cart.lines.map((line: any) => ({
    priceId: getPaddlePriceId(line.merchandise.product.id),
    quantity: line.quantity,
  }));
  // ...
};
```

## 测试支付流程

### 1. 启动开发服务器

```bash
npm run dev
```

### 2. 测试步骤

1. 访问 `http://localhost:3000`
2. 添加商品到购物车
3. 点击 "Proceed to Checkout"
4. Paddle支付窗口应该弹出
5. 使用测试卡号进行支付:
   - 卡号: `4242 4242 4242 4242`
   - 有效期: 任意未来日期
   - CVC: 任意3位数字

### 3. 验证支付流程

- ✅ 支付窗口正常打开
- ✅ 可以输入支付信息
- ✅ 支付成功后跳转到成功页面
- ✅ 支付取消后返回购物车

## Webhook配置

### 1. 设置Webhook URL

在Paddle后台配置Webhook:

1. 进入 **Developer Tools > Notifications**
2. 点击 **Add Endpoint**
3. 输入Webhook URL:
   - 开发环境: 使用ngrok等工具暴露本地端口
   - 生产环境: `https://yourdomain.com/api/paddle/webhook`
4. 选择要接收的事件:
   - `transaction.completed`
   - `transaction.paid`
   - `subscription.created`
   - `subscription.updated`
   - `subscription.canceled`
5. 保存并复制 **Webhook Secret**

### 2. 本地测试Webhook

使用ngrok暴露本地端口:

```bash
ngrok http 3000
```

将ngrok提供的URL配置到Paddle后台:
```
https://your-ngrok-url.ngrok.io/api/paddle/webhook
```

### 3. 验证Webhook

发送测试事件验证Webhook是否正常工作:

1. 在Paddle后台点击 **Send Test Event**
2. 检查服务器日志确认收到事件
3. 验证签名验证是否通过

## 常见问题

### Q1: Paddle初始化失败

**错误**: `Paddle is not initialized`

**解决方案**:
1. 检查环境变量是否正确配置
2. 确认 `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN` 已设置
3. 验证token是否有效

### Q2: 找不到Price ID

**错误**: `No Paddle price mapping found for product`

**解决方案**:
1. 在Paddle后台创建对应的产品和价格
2. 更新 `product-mapping.ts` 文件
3. 确保映射关系正确

### Q3: Webhook签名验证失败

**错误**: `Invalid signature`

**解决方案**:
1. 检查 `PADDLE_WEBHOOK_SECRET` 是否正确
2. 确认Webhook URL配置正确
3. 验证请求头中包含签名信息

### Q4: 支付窗口不显示

**解决方案**:
1. 检查浏览器控制台错误
2. 确认Paddle SDK正确加载
3. 验证Price ID是否有效
4. 检查是否有弹窗拦截

### Q5: 生产环境配置

切换到生产环境:

1. 更新环境变量:
   ```env
   NEXT_PUBLIC_PADDLE_ENVIRONMENT="production"
   ```
2. 使用生产环境的API凭证
3. 配置生产环境的Webhook URL
4. 完成Paddle账号验证和审核

## 进一步优化

### 1. 添加价格预览

在购物车中显示实时价格预览:

```typescript
import { getPricePreview } from 'lib/paddle/client';

const preview = await getPricePreview(items);
console.log('Total:', preview.data.details.totals.total);
```

### 2. 自定义支付界面

配置Paddle支付窗口主题:

```typescript
await openPaddleCheckout({
  items,
  settings: {
    theme: 'dark',  // 或 'light'
    locale: 'zh',   // 中文界面
  }
});
```

### 3. 订阅支持

如果需要支持订阅:

```typescript
const subscription = await paddleServer.createSubscription({
  customerId: 'ctm_01h1vjes1y163xfj1rh1tkfb65',
  items: [{ priceId: 'pri_01h1vjes1y163xfj1rh1tkfb65', quantity: 1 }]
});
```

## 支持

如有问题,请参考:
- [Paddle官方文档](https://developer.paddle.com/)
- [Paddle SDK文档](https://developer.paddle.com/paddlejs/overview)
- [Paddle API参考](https://developer.paddle.com/api-reference/overview)

---

**集成完成!** 🎉

现在你的电商网站已经完全使用Paddle作为支付系统。
