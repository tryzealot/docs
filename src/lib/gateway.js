class Gateway {
  constructor(baseURL) {
    if (!baseURL) {
      throw new Error("Gateway baseURL is required");
    }
    this.baseURL = baseURL.replace(/\/$/, "");
  }

  async orders(email) {
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
        if (response.status === 404) {
          return { orders: [] };
        }

        const errorText = await response.text();
        throw new Error(
          `Gateway API request failed: ${response.status} ${response.statusText} - ${errorText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to fetch orders from gateway:", error);
      throw error;
    }
  }

  async generateLicense(data) {
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

      return await response.json();
    } catch (error) {
      console.error("Failed to generate license:", error);
      throw error;
    }
  }
}

export function initGateway(baseURL) {
  return new Gateway(baseURL);
}

export default Gateway;
