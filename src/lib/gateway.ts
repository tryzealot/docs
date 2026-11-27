import type {
  GatewayClient,
  OrdersResponse,
  LicenseRequest,
  LicenseResponse,
} from "@site/src/types";

export class GatewayError extends Error {
  readonly status: number;
  readonly data: unknown;

  constructor(message: string, status: number, data: unknown) {
    super(message);
    this.name = "GatewayError";
    this.status = status;
    this.data = data;
  }
}

export default class Gateway implements GatewayClient {
  private baseURL: string;

  constructor(baseURL: string) {
    if (!baseURL) {
      throw new Error("Gateway baseURL is required");
    }
    this.baseURL = baseURL.replace(/\/$/, "");
  }

  async orders(encryptedEmail: string, token: string): Promise<OrdersResponse> {
    if (!encryptedEmail) {
      throw new Error("Encrypted email is required");
    }
    if (!token) {
      throw new Error("Delivery token is required");
    }

    const params = new URLSearchParams({
      email: encryptedEmail,
      token,
    });
    const url = `${this.baseURL}/payments/orders?${params.toString()}`;

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
    // Read the body as text first: a 404 from a proxy can be plain text, and
    // response.json() would throw a SyntaxError that loses the HTTP status.
    const text = await response.text();
    let body: unknown;
    if (text) {
      try {
        body = JSON.parse(text);
      } catch {
        body = { message: text };
      }
    }

    const payload =
      body && typeof body === "object" ? (body as Record<string, unknown>) : {};
    const message =
      typeof payload.message === "string" && payload.message
        ? payload.message
        : `Request failed with status ${response.status}`;

    if (!response.ok) {
      throw new GatewayError(message, response.status, body);
    }

    return (body ?? {}) as T;
  }
}

export function initGateway(baseURL: string): GatewayClient {
  return new Gateway(baseURL);
}
