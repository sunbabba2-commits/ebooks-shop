import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // 检查是否是 /membership 路径且带有 orderSn 参数
  if (request.nextUrl.pathname === '/membership') {
    const orderSn = request.nextUrl.searchParams.get('orderSn');
    
    if (orderSn) {
      // 🚀 在渲染任何页面之前，直接重定向到 API Route
      // 这样用户完全看不到任何页面渲染，包括导航栏和 logo
      const url = new URL(`/api/payment-redirect?orderSn=${orderSn}`, request.url);
      return NextResponse.redirect(url, {
        status: 307, // 临时重定向
      });
    }
  }

  // 其他请求正常处理
  return NextResponse.next();
}

// 配置 middleware 只在特定路径运行
export const config = {
  matcher: '/membership',
};
