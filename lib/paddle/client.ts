'use client';

import { initializePaddle, Paddle } from '@paddle/paddle-js';
import { PADDLE_CONFIG, validatePaddleConfig } from './config';
import type { PaddleCheckoutOptions } from './types';

let paddleInstance: Paddle | null = null;

/**
 * 初始化Paddle实例
 */
export async function getPaddleInstance(): Promise<Paddle | null> {
  if (paddleInstance) {
    return paddleInstance;
  }

  try {
    validatePaddleConfig();
    
    paddleInstance = (await initializePaddle({
      environment: PADDLE_CONFIG.environment,
      token: PADDLE_CONFIG.token,
      eventCallback: (event) => {
        console.log('Paddle event:', event);
        
        // 处理支付完成事件
        if (event.name === 'checkout.completed') {
          handleCheckoutCompleted(event.data);
        }
        
        // 处理支付关闭事件
        if (event.name === 'checkout.closed') {
          handleCheckoutClosed(event.data);
        }
      },
    })) || null;

    return paddleInstance;
  } catch (error) {
    console.error('Failed to initialize Paddle:', error);
    return null;
  }
}

/**
 * 打开Paddle结账页面
 */
export async function openPaddleCheckout(options: PaddleCheckoutOptions) {
  const paddle = await getPaddleInstance();
  
  if (!paddle) {
    throw new Error('Paddle is not initialized');
  }

  try {
    const checkoutOptions: any = {
      items: options.items,
      customData: options.customData,
      settings: {
        displayMode: 'overlay',
        theme: 'light',
        locale: 'en',
        successUrl: `${window.location.origin}/checkout/success`,
        closeUrl: window.location.href,
        ...options.settings,
      },
    };

    // 只在customer存在且email有值时添加customer
    if (options.customer?.email) {
      checkoutOptions.customer = {
        email: options.customer.email,
        address: options.customer.address,
      };
    }

    paddle.Checkout.open(checkoutOptions);
  } catch (error) {
    console.error('Failed to open Paddle checkout:', error);
    throw error;
  }
}

/**
 * 处理结账完成
 */
function handleCheckoutCompleted(data: any) {
  console.log('Checkout completed:', data);
  
  // 触发自定义事件
  window.dispatchEvent(new CustomEvent('paddle:checkout:completed', { 
    detail: data 
  }));
}

/**
 * 处理结账关闭
 */
function handleCheckoutClosed(data: any) {
  console.log('Checkout closed:', data);
  
  // 触发自定义事件
  window.dispatchEvent(new CustomEvent('paddle:checkout:closed', { 
    detail: data 
  }));
}

/**
 * 获取价格预览
 */
export async function getPricePreview(items: Array<{ priceId: string; quantity: number }>) {
  const paddle = await getPaddleInstance();
  
  if (!paddle) {
    throw new Error('Paddle is not initialized');
  }

  try {
    const preview = await paddle.PricePreview({
      items: items,
    });
    
    return preview;
  } catch (error) {
    console.error('Failed to get price preview:', error);
    throw error;
  }
}
