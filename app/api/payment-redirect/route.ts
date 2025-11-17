import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const orderSn = searchParams.get('orderSn');

  // 如果没有 orderSn，重定向到会员页面
  if (!orderSn) {
    return NextResponse.redirect(new URL('/membership', request.url));
  }

  try {
    // 调用后端 API 获取跳转链接
    const response = await fetch('https://api.antsports.tv/api/jump-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderSn }),
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch jump URL');
    }

    const data = await response.json();
    const jumpUrl = data?.data?.jumpUrl;

    if (jumpUrl) {
      // 🚀 直接返回 307 重定向 - 最快的方式！
      // 用户完全看不到中间页面，浏览器会无缝跳转
      return NextResponse.redirect(jumpUrl, {
        status: 307, // 临时重定向
      });
    } else {
      // 如果没有获取到 jumpUrl，降级到会员页面
      console.error('No jumpUrl found in API response');
      return NextResponse.redirect(new URL('/membership', request.url));
    }
  } catch (error) {
    console.error('Error in payment redirect:', error);
    // 出错时降级到会员页面
    return NextResponse.redirect(new URL('/membership', request.url));
  }
}
