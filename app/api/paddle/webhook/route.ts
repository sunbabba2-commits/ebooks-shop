import { handlePaddleWebhook, paddleServer } from 'lib/paddle/server';
import type { PaddleWebhookEvent } from 'lib/paddle/types';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // 获取请求头
    const signature = request.headers.get('paddle-signature');
    const timestamp = request.headers.get('paddle-timestamp');

    if (!signature || !timestamp) {
      return NextResponse.json(
        { error: 'Missing signature or timestamp' },
        { status: 400 }
      );
    }

    // 获取原始请求体
    const rawBody = await request.text();

    // 验证webhook签名
    const isValid = paddleServer.verifyWebhookSignature(
      signature,
      timestamp,
      rawBody
    );

    if (!isValid) {
      console.error('Invalid webhook signature');
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    // 解析webhook事件
    const event: PaddleWebhookEvent = JSON.parse(rawBody);

    // 处理webhook事件
    await handlePaddleWebhook(event);

    // 返回成功响应
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

// 禁用body解析,因为我们需要原始请求体来验证签名
export const runtime = 'nodejs';
