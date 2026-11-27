import { useEffect, useState } from "react";
import { initGateway } from "@site/src/lib/gateway";
import { getGatewayURL } from "@site/src/lib/config";
import type { GatewayClient } from "@site/src/types";

export function useGateway(): { gateway: GatewayClient | undefined } {
  const [gateway, setGateway] = useState<GatewayClient | undefined>(undefined);

  useEffect(() => {
    try {
      const client = initGateway(getGatewayURL());
      setGateway(client);
    } catch (error) {
      console.error("Failed to initialize Gateway:", error);
    }
  }, []);

  return { gateway };
}
