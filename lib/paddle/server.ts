import { PADDLE_CONFIG } from './config';
import type { PaddleTransaction, PaddleWebhookEvent } from './types';

const PADDLE_API_BASE = PADDLE_CONFIG.environment === 'sandbox' 
  ? 'https://sandbox-api.paddle.com'
  : 'https://api.paddle.com';

/**
 * Paddle服务端API客户端
 */
class PaddleServerClient {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * 发送API请求
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${PADDLE_API_BASE}${endpoint}`;
    
    const response = await fetch(url, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(
        `Paddle API error: ${response.status} - ${JSON.stringify(error)}`
      );
    }

    return response.json();
  }

  /**
   * 创建产品
   */
  async createProduct(data: {
    name: string;
    description?: string;
    taxCategory: string;
    imageUrl?: string;
  }) {
    return this.request('/products', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * 创建价格
   */
  async createPrice(data: {
    productId: string;
    description: string;
    unitPrice: {
      amount: string;
      currencyCode: string;
    };
    billingCycle?: {
      interval: 'day' | 'week' | 'month' | 'year';
      frequency: number;
    };
  }) {
    return this.request('/prices', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * 获取交易详情
   */
  async getTransaction(transactionId: string): Promise<PaddleTransaction> {
    return this.request(`/transactions/${transactionId}`, {
      method: 'GET',
    });
  }

  /**
   * 获取客户信息
   */
  async getCustomer(customerId: string) {
    return this.request(`/customers/${customerId}`, {
      method: 'GET',
    });
  }

  /**
   * 创建订阅
   */
  async createSubscription(data: {
    customerId: string;
    items: Array<{
      priceId: string;
      quantity: number;
    }>;
  }) {
    return this.request('/subscriptions', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * 验证webhook签名
   */
  verifyWebhookSignature(
    signature: string,
    timestamp: string,
    rawBody: string
  ): boolean {
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
}

// 导出单例实例
export const paddleServer = new PaddleServerClient(PADDLE_CONFIG.apiKey);

/**
 * 处理Paddle Webhook事件
 */
export async function handlePaddleWebhook(event: PaddleWebhookEvent) {
  console.log('Processing Paddle webhook:', event.eventType);

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
    
    default:
      console.log('Unhandled webhook event:', event.eventType);
  }
}

async function handleTransactionCompleted(data: any) {
  console.log('Transaction completed:', data);
  // 实现订单完成逻辑
  // 例如:更新数据库订单状态、发送确认邮件等
}

async function handleTransactionPaid(data: any) {
  console.log('Transaction paid:', data);
  // 实现支付完成逻辑
}

async function handleSubscriptionCreated(data: any) {
  console.log('Subscription created:', data);
  // 实现订阅创建逻辑
}

async function handleSubscriptionUpdated(data: any) {
  console.log('Subscription updated:', data);
  // 实现订阅更新逻辑
}

async function handleSubscriptionCanceled(data: any) {
  console.log('Subscription canceled:', data);
  // 实现订阅取消逻辑
}
