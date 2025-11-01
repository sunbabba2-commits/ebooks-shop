// Paddle类型定义
export interface PaddleProduct {
  priceId: string;
  quantity: number;
}

export interface PaddleCheckoutItem {
  priceId: string;
  quantity: number;
}

export interface PaddleCustomer {
  email?: string;
  address?: {
    countryCode: string;
    postalCode?: string;
  };
}

export interface PaddleCheckoutSettings {
  displayMode?: 'inline' | 'overlay';
  theme?: 'light' | 'dark';
  locale?: string;
  allowLogout?: boolean;
  showAddDiscounts?: boolean;
  successUrl?: string;
  closeUrl?: string;
}

export interface PaddleCheckoutOptions {
  items: PaddleCheckoutItem[];
  customer?: PaddleCustomer;
  customData?: Record<string, any>;
  settings?: PaddleCheckoutSettings;
}

export interface PaddleTransaction {
  id: string;
  status: 'draft' | 'ready' | 'billed' | 'paid' | 'completed' | 'canceled';
  customerId: string;
  items: Array<{
    priceId: string;
    quantity: number;
  }>;
  details: {
    totals: {
      subtotal: string;
      discount: string;
      tax: string;
      total: string;
      credit: string;
      balance: string;
      grandTotal: string;
      fee: string;
      earnings: string;
      currencyCode: string;
    };
  };
}

export interface PaddleWebhookEvent {
  eventId: string;
  eventType: string;
  occurredAt: string;
  notificationId: string;
  data: any;
}
