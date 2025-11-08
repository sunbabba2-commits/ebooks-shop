'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function OrderSnRedirect() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const orderSn = searchParams.get('orderSn');
    
    if (orderSn) {
      // Call the API to get the jump URL
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
          if (data.jumpUrl) {
            // Redirect to the jump URL
            window.location.href = data.jumpUrl;
          }
        })
        .catch((error) => {
          console.error('Error fetching jump URL:', error);
        });
    }
  }, [searchParams]);

  return null;
}
