// ===== Gateway 相关类型 =====
export interface GatewayClient {
  orders: (encryptedEmail: string) => Promise<OrdersResponse>;
  generateLicense: (data: LicenseRequest) => Promise<LicenseResponse>;
}

// ===== 订单相关类型 =====
export interface Customer {
  id: string;
  email: string;
}

export interface License {
  id: string;
  key: string;
  active: boolean;
}

export interface Order {
  id: string;
  totalAmount: number;
  currency: string;
  status: 'completed' | 'pending' | 'failed';
  createdAt: string;
  paidAt?: string;
}

export interface Subscription {
  id: string;
  status: 'active' | 'cancelled' | 'paused' | 'trialing';
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
}

export interface OrdersResponse {
  customer?: Customer;
  license?: License;
  orders: Order[];
  subscription?: Subscription;
}

// ===== License 相关类型 =====
export interface LicenseRequest {
  transactionId: string;
  checkoutId: string;
  customerEmail: string;
  priceId: string;
}

export interface LicenseData {
  id: number;
  key: string;
  expiredAt: string;
  active: boolean;
}

export interface OrderData {
  id: string;
  totalAmount: number;
  currency: string;
  status: string;
}

export interface SubscriptionData {
  id: string;
  status: string;
  currentPeriodEnd: string;
}

export interface LicenseCustomer {
  id: string;
  email: string;
  paddleCustomerId: string;
}

export interface LicenseResponse {
  success: boolean;
  message?: string;
  license?: LicenseData;
  order?: OrderData;
  subscription?: SubscriptionData;
  customer?: LicenseCustomer;
}

// ===== Paddle 相关类型 =====
export interface PaddleCheckoutSettings {
  variant: 'multi-page' | 'inline';
  locale: string;
  theme: 'dark' | 'light';
  allowLogout: boolean;
  showAddTaxId: boolean;
  successUrl: string;
  displayMode?: 'inline' | 'overlay';
  frameTarget?: string;
  frameStyle?: string;
  frameInitialHeight?: string;
}

export interface PaddleCheckoutOptions {
  checkout: {
    settings: PaddleCheckoutSettings;
  };
  eventCallback: (data: PaddleEvent) => void;
}

export interface PaddleEventData {
  id: string;
  transaction_id?: string;
  customer?: {
    email: string;
    name?: string;
  };
  items?: Array<{
    price_id: string;
  }>;
  totals?: {
    total: number;
  };
  error?: {
    code: string;
    message: string;
  };
}

export interface PaddleEvent {
  name: 'checkout.completed' | 'checkout.payment.failed' | 'checkout.closed' | 'checkout.customer.updated' | string;
  data: PaddleEventData;
}

export interface PaddleCheckoutItem {
  priceId: string;
  quantity?: number;
}

export interface PaddleCheckoutOpenOptions {
  customer: {
    email: string;
    name: string;
    address: {
      countryCode: string;
    };
  };
  discountCode?: string | null;
  items: PaddleCheckoutItem[];
  customData: {
    customerEmail: string;
    priceId: string;
  };
}

export interface PaddleInstance {
  Initialized: boolean;
  Checkout: {
    open: (options: PaddleCheckoutOpenOptions) => void;
  };
  Spinner: {
    show: () => void;
    hide?: () => void;
  };
  PricePreview: (request: { items: PaddleCheckoutItem[]; country: string }) => Promise<PaddlePricePreviewResponse>;
}

export interface PaddlePricePreviewItem {
  price: { id: string };
  formattedTotals: { total: string };
}

export interface PaddlePricePreviewResponse {
  data: {
    details: {
      lineItems: PaddlePricePreviewItem[];
    };
  };
}

// ===== 交易数据类型 =====
export interface TransactionData {
  transactionId: string;
  checkoutId: string;
  customerEmail: string;
  priceId: string;
  amount?: number;
}

export interface ErrorData {
  errorCode: string;
  errorMessage: string;
}

// ===== Pricing 相关类型 =====
export interface PricingButtonConfig {
  text: string;
  id?: string;
  href?: string;
  type: 'link' | 'paddle';
}

export interface PricingTierItem {
  key: string;
  name: string;
  icon: string;
  price?: string;
  priceId?: string;
  frequency?: string;
  trial?: string;
  save?: string;
  features: string[];
  button: PricingButtonConfig;
  highlight: boolean;
}

export interface EnterpriseTierItem {
  title: string;
  description: string;
  button: {
    text: string;
    href: string;
  };
}

// ===== Region 相关类型 =====
export interface Region {
  locale: string;
  value: string;
  label: string;
}