import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { encrypt } from "@site/src/lib/crypto";
import { GatewayError } from "@site/src/lib/gateway";
import type { GatewayClient, OrdersResponse } from "@site/src/types";

const secretKey =
  process.env.ZEALOT_ENCRYPTION_KEY || "default-key-for-ssr-build";

function getSecretKey(): string {
  if (secretKey === "default-key-for-ssr-build") {
    throw new Error("ZEALOT_ENCRYPTION_KEY is not defined");
  }
  return secretKey;
}

/**
 * Get customer orders using an encrypted email and Delivery Token
 * @param gateway - Gateway instance
 * @param email - Customer email
 * @param token - Delivery Token from the claim link
 * @param enabled - Whether to enable query
 * @returns React Query result
 */
export const useCustomerOrders = (
  gateway: GatewayClient | undefined,
  email: string,
  token: string,
  enabled = false,
): UseQueryResult<OrdersResponse, Error> => {
  return useQuery({
    queryKey: ["customerOrders", email, token],
    queryFn: async () => {
      if (!gateway) {
        throw new Error("Gateway is not initialized");
      }
      // Encrypt email
      const encryptedEmail = await encrypt(email, getSecretKey());
      const result = await gateway.orders(encryptedEmail, token);
      // The gateway can answer with a bare message payload when it finds no
      // customer. Normalise it so callers never have to guard `orders.length`.
      return { ...result, orders: result?.orders ?? [] };
    },
    enabled: !!email && !!token && !!gateway && enabled,
    retry: (failureCount, error) => {
      // 403 / 404 错误不重试，其他错误重试 2 次
      if (
        error instanceof GatewayError &&
        (error.status === 403 || error.status === 404)
      ) {
        return false;
      }
      return failureCount < 2;
    },
  });
};
