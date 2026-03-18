import type {
  GatewayClient,
  OrdersResponse,
  LicenseRequest,
  LicenseResponse,
} from "@site/src/types";

export default class Gateway implements GatewayClient {
  private baseURL: string;

  constructor(baseURL: string) {
    if (!baseURL) {
      throw new Error("Gateway baseURL is required");
    }
    this.baseURL = baseURL.replace(/\/$/, "");
  }

  async orders(email: string): Promise<OrdersResponse> {
    if (!email) {
      throw new Error("Email is required");
    }

    const url = `${this.baseURL}/payments/orders?email=${encodeURIComponent(
      email,
    )}`;

    const response = await fetch(url, {
      method: "GET",
    });

    return this.handleResponse<OrdersResponse>(response);
  }

  async generateLicense(data: LicenseRequest): Promise<LicenseResponse> {
    if (!data) {
      throw new Error("License data is required");
    }

    const url = `${this.baseURL}/payments/license`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return this.handleResponse<LicenseResponse>(response);
  }

  async handleResponse<T>(response: Response): Promise<T> {
    const body = await response.json();
    console.log("Gateway response:", body);
    if (!response.ok) {
      const error = new Error(body.message || `Request failed with status ${response.status}`);
      (error as any).status = response.status;
      (error as any).data = body;
      throw error;
    }

    return body;
  }
}

export function initGateway(baseURL: string): GatewayClient {
  return new Gateway(baseURL);
}
