import { useQuery } from "@tanstack/react-query";
import { encrypt } from "./crypto";

const secretKey = process.env.ZEALOT_ENCRYPTION_KEY;
if (!secretKey) {
  throw new Error("ZEALOT_ENCRYPTION_KEY is not defined");
}
  
/**
 * Get customer orders
 * @param {Object} gateway - Gateway instance
 * @param {string} email - Customer email
 * @param {boolean} enabled - Whether to enable query
 * @returns {Object} React Query result
 */
export const useCustomerOrders = (gateway, email, enabled = false) => {
  const getCustomerOrders = async () => {
    // Get encryption key from environment variable


    // Encrypt email
    const encryptedEmail = await encrypt(email, secretKey);

    return gateway.orders(encryptedEmail);
  };

  return useQuery({
    queryKey: ["customerOrders", email],
    queryFn: getCustomerOrders,
    enabled: !!email && !!gateway && enabled,
  });
};