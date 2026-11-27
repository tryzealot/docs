const DELIVERY_TOKEN_PREFIX = "ZDL1";
const BASE64URL_PATTERN = /^[A-Za-z0-9_-]+$/;

function decodeBase64Url(input: string): string {
  if (!BASE64URL_PATTERN.test(input)) {
    throw new Error("Invalid base64url encoding");
  }

  const normalized = input.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(
    normalized.length + ((4 - (normalized.length % 4)) % 4),
    "=",
  );

  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

/**
 * Extract the unverified email claim from a `ZDL1.<payload>.<signature>`
 * Delivery Token so the client can encrypt it for the Gateway orders endpoint.
 *
 * Signature, expiry, environment, and email-match verification are enforced by
 * the Gateway; this helper only validates the token envelope shape.
 */
export function parseDeliveryTokenEmail(token: string): string | null {
  const trimmed = token.trim();
  if (!trimmed) {
    return null;
  }

  const parts = trimmed.split(".");
  if (parts.length !== 3) {
    return null;
  }

  const [prefix, payloadPart, signaturePart] = parts;
  if (
    prefix !== DELIVERY_TOKEN_PREFIX ||
    !payloadPart ||
    !signaturePart ||
    !BASE64URL_PATTERN.test(signaturePart)
  ) {
    return null;
  }

  try {
    const json = decodeBase64Url(payloadPart);
    const payload: unknown = JSON.parse(json);
    if (!payload || typeof payload !== "object") {
      return null;
    }

    const email = (payload as Record<string, unknown>).email;
    if (typeof email !== "string" || !email.trim()) {
      return null;
    }

    return email.trim();
  } catch {
    return null;
  }
}
