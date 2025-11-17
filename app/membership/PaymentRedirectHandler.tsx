'use client';

import { useEffect, useState } from 'react';

export default function PaymentRedirectHandler({ 
  orderSn, 
  jumpUrl 
}: { 
  orderSn: string; 
  jumpUrl?: string;
}) {
  const [error, setError] = useState(false);

  useEffect(() => {
    // 修改页面标题
    document.title = 'Connecting to Payment Gateway...';
    
    // 🚀 优化：如果服务端已经获取了 jumpUrl，直接跳转，不再调用 API
    if (jumpUrl) {
      console.log('Using server-provided jumpUrl, skipping API call');
      window.location.href = jumpUrl;
      return;
    }
    
    // 如果服务端没有提供 jumpUrl（降级方案），客户端调用 API
    console.log('Server did not provide jumpUrl, fetching from client');
    fetch('https://api.antsports.tv/api/jump-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderSn }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch jump URL');
        }
        return response.json();
      })
      .then((data) => {
        const { data: { jumpUrl = '' } } = data || {};
        if (jumpUrl) {
          // 跳转到支付页面
          window.location.href = jumpUrl;
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        console.error('Error fetching jump URL:', error);
        setError(true);
      });
  }, [orderSn, jumpUrl]);

  // 如果出错，显示错误提示（可选）
  if (error) {
    console.error('Failed to redirect to payment gateway');
  }

  return null;
}
