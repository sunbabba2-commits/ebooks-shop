# Paddle支付快速开始指南

## 🚀 快速开始

### 第一步: 配置环境变量

1. 复制环境变量模板:
```bash
cp .env.example .env.local
```

2. 在 `.env.local` 中添加Paddle配置:
```env
# Paddle支付配置
NEXT_PUBLIC_PADDLE_ENVIRONMENT="sandbox"
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN="your_paddle_client_token"
NEXT_PUBLIC_PADDLE_VENDOR_ID="your_paddle_vendor_id"
PADDLE_API_KEY="your_paddle_api_key"
PADDLE_WEBHOOK_SECRET="your_paddle_webhook_secret"
```

### 第二步: 在Paddle后台创建产品

1. 登录 [Paddle Sandbox](https://sandbox-vendors.paddle.com/)
2. 进入 **Catalog > Products**
3. 为每个Shopify产品创建对应的Paddle产品和价格
4. 记录每个产品的 **Price ID**

### 第三步: 配置产品映射

编辑 `lib/paddle/product-mapping.ts`:

```typescript
export const PRODUCT_PRICE_MAPPING: Record<string, string> = {
  'gid://shopify/Product/YOUR_SHOPIFY_PRODUCT_ID': 'pri_YOUR_PADDLE_PRICE_ID',
  // 添加更多产品映射...
};
```

**如何获取Shopify产品ID:**
1. 在购物车中添加产品
2. 打开浏览器控制台
3. 查看 `cart.lines[0].merchandise.product.id`

### 第四步: 启动开发服务器

```bash
npm run dev
```

### 第五步: 测试支付流程

1. 访问 `http://localhost:3000`
2. 添加商品到购物车
3. 点击 "Proceed to Checkout"
4. 使用测试卡号: `4242 4242 4242 4242`

## 📁 已创建的文件

### 核心文件
- `lib/paddle/config.ts` - Paddle配置
- `lib/paddle/types.ts` - TypeScript类型定义
- `lib/paddle/client.ts` - 客户端SDK
- `lib/paddle/server.ts` - 服务端API
- `lib/paddle/product-mapping.ts` - 产品价格映射

### 页面
- `app/checkout/success/page.tsx` - 支付成功页面
- `app/checkout/canceled/page.tsx` - 支付取消页面

### API
- `app/api/paddle/webhook/route.ts` - Webhook处理

### 修改的文件
- `components/cart/modal.tsx` - 集成Paddle支付按钮
- `.env.example` - 添加Paddle环境变量示例

## ⚙️ 主要功能

### 1. 支付流程
- ✅ 购物车集成Paddle支付
- ✅ 支付窗口弹出
- ✅ 支付成功/取消处理
- ✅ 中文界面支持

### 2. Webhook处理
- ✅ 交易完成事件
- ✅ 支付完成事件
- ✅ 订阅事件(如需要)
- ✅ 签名验证

### 3. 错误处理
- ✅ 产品映射错误提示
- ✅ 支付失败提示
- ✅ 网络错误处理

## 🔧 配置Webhook (生产环境)

### 1. 获取Webhook URL
生产环境: `https://yourdomain.com/api/paddle/webhook`

### 2. 在Paddle后台配置
1. 进入 **Developer Tools > Notifications**
2. 点击 **Add Endpoint**
3. 输入Webhook URL
4. 选择事件类型
5. 保存并复制 **Webhook Secret**

### 3. 更新环境变量
```env
PADDLE_WEBHOOK_SECRET="your_webhook_secret"
```

## 📝 重要提示

### ⚠️ 必须完成的配置

1. **环境变量**: 必须配置所有Paddle相关的环境变量
2. **产品映射**: 必须在 `product-mapping.ts` 中添加所有产品的映射
3. **Webhook**: 生产环境必须配置Webhook URL

### 💡 测试建议

1. 先在Sandbox环境测试
2. 确保所有产品都有对应的Price ID
3. 测试支付成功和取消流程
4. 验证Webhook是否正常接收

### 🔒 安全注意事项

1. 不要将API密钥提交到Git
2. 使用环境变量存储敏感信息
3. 验证所有Webhook签名
4. 在生产环境使用HTTPS

## 📚 更多文档

详细文档请查看: [PADDLE_INTEGRATION_GUIDE.md](./PADDLE_INTEGRATION_GUIDE.md)

## 🆘 常见问题

### Q: 支付窗口不显示?
A: 检查浏览器控制台错误,确认环境变量配置正确

### Q: 找不到Price ID?
A: 确保在 `product-mapping.ts` 中添加了产品映射

### Q: Webhook不工作?
A: 验证Webhook Secret是否正确,检查服务器日志

## ✅ 检查清单

部署前请确认:

- [ ] 所有环境变量已配置
- [ ] 产品映射已完成
- [ ] 测试支付流程正常
- [ ] Webhook已配置并测试
- [ ] 生产环境使用production模式
- [ ] API密钥安全存储

---

**集成完成!** 🎉 你的网站现在使用Paddle作为支付系统。
