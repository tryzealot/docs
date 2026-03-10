import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { encrypt } from "./crypto";
import type { GatewayClient, OrdersResponse } from "../types";

const secretKey = process.env.ZEALOT_ENCRYPTION_KEY;
if (!secretKey) {
  throw new Error("ZEALOT_ENCRYPTION_KEY is not defined");
}

/**
 * Get customer orders
 * @param gateway - Gateway instance
 * @param email - Customer email
 * @param enabled - Whether to enable query
 * @returns React Query result
 */
export const useCustomerOrders = (
  gateway: GatewayClient | undefined,
  email: string,
  enabled = false
): UseQueryResult<OrdersResponse, Error> => {
  return useQuery({
    queryKey: ["customerOrders", email],
    queryFn: async () => {
      if (!gateway) {
        throw new Error("Gateway is not initialized");
      }
      // Encrypt email
      const encryptedEmail = await encrypt(email, secretKey);
      return gateway.orders(encryptedEmail);
    },
    enabled: !!email && !!gateway && enabled,
  });
};