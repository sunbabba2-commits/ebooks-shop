'use client';

import { useEffect, useState } from 'react';

export default function PaymentRedirectHandler({ orderSn }: { orderSn: string }) {
  const [error, setError] = useState(false);

  useEffect(() => {
    // 修改页面标题
    document.title = 'Connecting to Payment Gateway...';
    
    // 调用 API 获取跳转链接
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
  }, [orderSn]);

  // 如果出错，显示错误提示（可选）
  if (error) {
    console.error('Failed to redirect to payment gateway');
  }

  return null;
}
