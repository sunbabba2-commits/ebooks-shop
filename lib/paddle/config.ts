// Paddle配置文件
export const PADDLE_CONFIG = {
  // 从环境变量获取Paddle配置
  environment: process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT as 'sandbox' | 'production' || 'sandbox',
  token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN || '',
  // Paddle Vendor ID (从Paddle后台获取)
  vendorId: process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID || '',
  // Paddle API密钥(服务端使用)
  apiKey: process.env.PADDLE_API_KEY || '',
  // Webhook密钥
  webhookSecret: process.env.PADDLE_WEBHOOK_SECRET || '',
};

// 验证配置
export function validatePaddleConfig() {
  if (!PADDLE_CONFIG.token) {
    throw new Error('Paddle client token is not configured');
  }
  if (!PADDLE_CONFIG.vendorId) {
    throw new Error('Paddle vendor ID is not configured');
  }
  return true;
}
