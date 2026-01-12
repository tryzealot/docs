import { useEffect, useState } from "react";
import { initGateway } from "@site/src/lib/gateway";

export function useGateway() {
  const [gateway, setGateway] = useState(undefined);

  useEffect(() => {
    const baseURL = process.env.ZEALOT_GATEWAY_URL;
    if (!baseURL) {
      console.warn("ZEALOT_GATEWAY_URL is not defined");
      return;
    }

    if (baseURL) {
      try {
        const client = initGateway(baseURL);
        setGateway(client);
      } catch (error) {
        console.error("Failed to initialize Gateway:", error);
      }
    }
  }, []);

  return { gateway };
}
