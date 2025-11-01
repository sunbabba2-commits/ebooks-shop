# Paddle异步通知(Webhook)完整指南

## 📋 目录

1. [什么是Webhook](#什么是webhook)
2. [Webhook工作流程](#webhook工作流程)
3. [本地开发测试](#本地开发测试)
4. [生产环境配置](#生产环境配置)
5. [处理不同事件](#处理不同事件)
6. [安全验证](#安全验证)
7. [常见问题](#常见问题)

## 什么是Webhook

Webhook是Paddle用来通知你的服务器支付事件的机制。当用户完成支付、订阅更新等操作时,Paddle会向你配置的URL发送HTTP POST请求。

### 已实现的Webhook端点

```
POST /api/paddle/webhook
```

位置: `app/api/paddle/webhook/route.ts`

## Webhook工作流程

```
用户支付 → Paddle处理 → Paddle发送Webhook → 你的服务器接收 → 验证签名 → 处理业务逻辑
```

### 支持的事件类型

已在代码中实现的事件:

1. **transaction.completed** - 交易完成
2. **transaction.paid** - 支付完成
3. **subscription.created** - 订阅创建
4. **subscription.updated** - 订阅更新
5. **subscription.canceled** - 订阅取消

## 本地开发测试

### 方法一: 使用ngrok (推荐)

#### 1. 安装ngrok

访问 https://ngrok.com/ 下载并安装

#### 2. 启动开发服务器

```bash
npm run dev
```

#### 3. 在新终端启动ngrok

```bash
ngrok http 3000
```

你会看到类似输出:
```
Forwarding  https://abc123.ngrok.io -> http://localhost:3000
```

#### 4. 在Paddle后台配置Webhook

1. 登录 [Paddle Sandbox](https://sandbox-vendors.paddle.com/)
2. 进入 **Developer Tools > Notifications**
3. 点击 **Add Endpoint**
4. 输入Webhook URL:
   ```
   https://abc123.ngrok.io/api/paddle/webhook
   ```
5. 选择要接收的事件
6. 保存并复制 **Webhook Secret**

#### 5. 更新环境变量

在 `.env.local` 中添加:
```env
PADDLE_WEBHOOK_SECRET="pdl_ntfset_01h1vjes1y163xfj1rh1tkfb65"
```

#### 6. 测试Webhook

在Paddle后台点击 **Send Test Event** 发送测试事件。

检查你的终端日志,应该看到:
```
Processing Paddle webhook: transaction.completed
Transaction completed: {...}
```

### 方法二: 使用Paddle CLI (可选)

```bash
# 安装Paddle CLI
npm install -g @paddle/paddle-cli

# 监听Webhook事件
paddle webhook listen --endpoint http://localhost:3000/api/paddle/webhook
```

## 生产环境配置

### 1. 部署到生产环境

确保你的网站已部署到生产环境(如Vercel)。

### 2. 配置生产环境Webhook

1. 登录 [Paddle Production](https://vendors.paddle.com/)
2. 进入 **Developer Tools > Notifications**
3. 添加生产环境Webhook URL:
   ```
   https://yourdomain.com/api/paddle/webhook
   ```
4. 选择事件类型
5. 保存并复制新的 **Webhook Secret**

### 3. 更新生产环境变量

在你的部署平台(如Vercel)设置环境变量:
```env
PADDLE_ENVIRONMENT="production"
PADDLE_WEBHOOK_SECRET="your_production_webhook_secret"
```

### 4. 验证Webhook

发送测试事件确认Webhook正常工作。

## 处理不同事件

### 当前实现

查看 `lib/paddle/server.ts` 中的事件处理:

```typescript
export async function handlePaddleWebhook(event: PaddleWebhookEvent) {
  switch (event.eventType) {
    case 'transaction.completed':
      await handleTransactionCompleted(event.data);
      break;
    
    case 'transaction.paid':
      await handleTransactionPaid(event.data);
      break;
    
    case 'subscription.created':
      await handleSubscriptionCreated(event.data);
      break;
    
    case 'subscription.updated':
      await handleSubscriptionUpdated(event.data);
      break;
    
    case 'subscription.canceled':
      await handleSubscriptionCanceled(event.data);
      break;
  }
}
```

### 自定义业务逻辑

编辑 `lib/paddle/server.ts` 添加你的业务逻辑:

```typescript
async function handleTransactionCompleted(data: any) {
  console.log('Transaction completed:', data);
  
  // 1. 提取订单信息
  const transactionId = data.id;
  const customerId = data.customer_id;
  const items = data.items;
  const total = data.details.totals.total;
  
  // 2. 保存到数据库
  // await saveOrderToDatabase({
  //   transactionId,
  //   customerId,
  //   items,
  //   total,
  //   status: 'completed'
  // });
  
  // 3. 发送确认邮件
  // await sendConfirmationEmail(data.customer.email, {
  //   orderId: transactionId,
  //   items,
  //   total
  // });
  
  // 4. 更新库存
  // await updateInventory(items);
  
  // 5. 触发其他业务流程
  // await triggerFulfillment(transactionId);
}
```

### 事件数据结构示例

#### transaction.completed

```json
{
  "event_id": "evt_01h1vjes1y163xfj1rh1tkfb65",
  "event_type": "transaction.completed",
  "occurred_at": "2024-01-01T12:00:00.000Z",
  "data": {
    "id": "txn_01h1vjes1y163xfj1rh1tkfb65",
    "status": "completed",
    "customer_id": "ctm_01h1vjes1y163xfj1rh1tkfb65",
    "items": [
      {
        "price_id": "pri_01h1vjes1y163xfj1rh1tkfb65",
        "quantity": 1
      }
    ],
    "details": {
      "totals": {
        "subtotal": "1000",
        "tax": "200",
        "total": "1200",
        "currency_code": "USD"
      }
    },
    "customer": {
      "email": "customer@example.com",
      "name": "John Doe"
    }
  }
}
```

## 安全验证

### Webhook签名验证

已在 `app/api/paddle/webhook/route.ts` 中实现:

```typescript
// 1. 获取签名和时间戳
const signature = request.headers.get('paddle-signature');
const timestamp = request.headers.get('paddle-timestamp');

// 2. 获取原始请求体
const rawBody = await request.text();

// 3. 验证签名
const isValid = paddleServer.verifyWebhookSignature(
  signature,
  timestamp,
  rawBody
);

if (!isValid) {
  return NextResponse.json(
    { error: 'Invalid signature' },
    { status: 401 }
  );
}
```

### 签名验证原理

```typescript
// lib/paddle/server.ts
verifyWebhookSignature(signature: string, timestamp: string, rawBody: string): boolean {
  const crypto = require('crypto');
  
  // 构建签名字符串
  const signedPayload = `${timestamp}:${rawBody}`;
  
  // 计算HMAC
  const hmac = crypto
    .createHmac('sha256', PADDLE_CONFIG.webhookSecret)
    .update(signedPayload)
    .digest('hex');
  
  // 比较签名
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(hmac)
  );
}
```

## 监控和日志

### 查看Webhook日志

#### 开发环境
检查终端输出:
```bash
npm run dev
```

#### 生产环境
查看部署平台日志(如Vercel):
```bash
vercel logs
```

### Paddle后台查看

1. 登录Paddle后台
2. 进入 **Developer Tools > Notifications**
3. 点击你的Webhook端点
4. 查看 **Recent deliveries**

### 添加自定义日志

编辑 `app/api/paddle/webhook/route.ts`:

```typescript
export async function POST(request: NextRequest) {
  try {
    // 记录接收到的Webhook
    console.log('[Webhook] Received at:', new Date().toISOString());
    
    const rawBody = await request.text();
    const event: PaddleWebhookEvent = JSON.parse(rawBody);
    
    // 记录事件类型
    console.log('[Webhook] Event type:', event.eventType);
    console.log('[Webhook] Event ID:', event.eventId);
    
    await handlePaddleWebhook(event);
    
    // 记录处理成功
    console.log('[Webhook] Processed successfully');
    
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    // 记录错误
    console.error('[Webhook] Error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
```

## 重试机制

Paddle会自动重试失败的Webhook:

- 如果你的服务器返回非2xx状态码
- Paddle会按指数退避重试
- 最多重试10次
- 重试间隔: 1分钟, 5分钟, 30分钟, 2小时, 5小时, 10小时, 15小时

### 确保幂等性

```typescript
async function handleTransactionCompleted(data: any) {
  const transactionId = data.id;
  
  // 检查是否已处理
  const existing = await checkIfProcessed(transactionId);
  if (existing) {
    console.log('Transaction already processed:', transactionId);
    return; // 避免重复处理
  }
  
  // 处理业务逻辑
  await processTransaction(data);
  
  // 标记为已处理
  await markAsProcessed(transactionId);
}
```

## 常见问题

### Q1: Webhook没有收到?

**检查清单:**
1. ✅ Webhook URL是否正确配置
2. ✅ 服务器是否可以从外网访问
3. ✅ 防火墙是否允许Paddle的IP
4. ✅ 路由是否正确 (`/api/paddle/webhook`)

**调试方法:**
```bash
# 测试端点是否可访问
curl -X POST https://yourdomain.com/api/paddle/webhook \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```

### Q2: 签名验证失败?

**原因:**
- Webhook Secret不正确
- 请求体被修改
- 时间戳过期

**解决方案:**
1. 确认 `PADDLE_WEBHOOK_SECRET` 正确
2. 不要修改原始请求体
3. 检查服务器时间是否准确

### Q3: 如何测试Webhook?

**方法1: Paddle后台测试**
1. 进入 **Developer Tools > Notifications**
2. 点击 **Send Test Event**

**方法2: 手动发送请求**
```bash
curl -X POST http://localhost:3000/api/paddle/webhook \
  -H "Content-Type: application/json" \
  -H "paddle-signature: test_signature" \
  -H "paddle-timestamp: $(date +%s)" \
  -d '{
    "event_id": "evt_test",
    "event_type": "transaction.completed",
    "occurred_at": "2024-01-01T12:00:00Z",
    "data": {
      "id": "txn_test",
      "status": "completed"
    }
  }'
```

### Q4: 如何处理大量Webhook?

**使用消息队列:**
```typescript
// 将Webhook放入队列
export async function POST(request: NextRequest) {
  const event = await request.json();
  
  // 放入队列(如Redis, RabbitMQ)
  await queue.add('paddle-webhook', event);
  
  // 立即返回200
  return NextResponse.json({ received: true });
}

// 后台worker处理
async function processWebhookQueue() {
  const event = await queue.get('paddle-webhook');
  await handlePaddleWebhook(event);
}
```

## 最佳实践

### 1. 快速响应

```typescript
// ✅ 好的做法
export async function POST(request: NextRequest) {
  const event = await request.json();
  
  // 立即返回200
  const response = NextResponse.json({ received: true });
  
  // 异步处理
  handlePaddleWebhook(event).catch(console.error);
  
  return response;
}
```

### 2. 错误处理

```typescript
async function handleTransactionCompleted(data: any) {
  try {
    await processTransaction(data);
  } catch (error) {
    // 记录错误但不抛出
    console.error('Failed to process transaction:', error);
    // 可以发送告警通知
    await sendAlert('Transaction processing failed', error);
  }
}
```

### 3. 监控告警

```typescript
// 设置告警
if (failureCount > 10) {
  await sendAlert('High webhook failure rate');
}
```

## 总结

✅ **已实现的功能:**
- Webhook端点: `/api/paddle/webhook`
- 签名验证
- 事件处理框架
- 错误处理

📝 **需要你做的:**
1. 配置Webhook URL
2. 设置Webhook Secret
3. 实现具体业务逻辑
4. 测试Webhook流程

🔗 **相关文档:**
- [Paddle Webhook文档](https://developer.paddle.com/webhooks/overview)
- [事件参考](https://developer.paddle.com/webhooks/event-reference)
