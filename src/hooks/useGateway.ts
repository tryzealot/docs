import { useEffect, useState } from "react";
import { initGateway } from "@site/src/lib/gateway";
import { getGatewayURL } from "@site/src/lib/config";
import type { GatewayClient } from "@site/src/types";

export function useGateway(): {
  gateway: GatewayClient | undefined;
  error: Error | null;
} {
  const [gateway, setGateway] = useState<GatewayClient | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      const client = initGateway(getGatewayURL());
      setGateway(client);
      setError(null);
    } catch (err) {
      console.error("Failed to initialize Gateway:", err);
      setError(
        err instanceof Error ? err : new Error("Failed to initialize Gateway"),
      );
    }
  }, []);

  return { gateway, error };
}
