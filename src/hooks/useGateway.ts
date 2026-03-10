import { useEffect, useState } from "react";
import { initGateway } from "@site/src/lib/gateway";
import type { GatewayClient } from "../types";

export function useGateway(): { gateway: GatewayClient | undefined } {
  const [gateway, setGateway] = useState<GatewayClient | undefined>(undefined);

  useEffect(() => {
    const baseURL = process.env.ZEALOT_GATEWAY_URL;
    if (!baseURL) {
      console.warn("ZEALOT_GATEWAY_URL is not defined");
      return;
    }

    try {
      const client = initGateway(baseURL);
      setGateway(client);
    } catch (error) {
      console.error("Failed to initialize Gateway:", error);
    }
  }, []);

  return { gateway };
}