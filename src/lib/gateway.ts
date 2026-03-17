import type { GatewayClient, OrdersResponse, LicenseRequest, LicenseResponse } from "@site/src/types";

class Gateway implements GatewayClient {
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
      email
    )}`;

    try {
      const response = await fetch(url, {
        method: "GET",
      });

      if (!response.ok) {
        const errorText = await response.text();
        const error = new Error(
          `Gateway API request failed: ${response.status} ${response.statusText} - ${errorText}`
        );
        (error as any).status = response.status;
        throw error;
      }

      return await response.json() as OrdersResponse;
    } catch (error) {
      console.error("Failed to fetch orders from gateway:", error);
      throw error;
    }
  }

  async generateLicense(data: LicenseRequest): Promise<LicenseResponse> {
    if (!data) {
      throw new Error("License data is required");
    }

    const url = `${this.baseURL}/payments/license`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Failed to generate license: ${response.status} ${response.statusText} - ${errorText}`
        );
      }

      return await response.json() as LicenseResponse;
    } catch (error) {
      console.error("Failed to generate license:", error);
      throw error;
    }
  }
}

export function initGateway(baseURL: string): GatewayClient {
  return new Gateway(baseURL);
}

export default Gateway;