/**
 * Runtime configuration shared by the checkout flow.
 *
 * Gateway routes follow ADR-0007: the public API lives under `/api`, and the
 * `(group)` directories used in the gateway source never appear in the URL.
 * That means the configured base URL must end with `/api`; requests are then
 * made to `/payments/...` relative to it.
 *
 * The base URL is supplied at build time through `ZEALOT_GATEWAY_URL`. There is
 * deliberately no hard-coded fallback: a preview that forgets the variable
 * should fail loudly instead of silently talking to the wrong gateway.
 */

function normalizeGatewayURL(url: string): string {
  const normalized = url.trim().replace(/\/+$/, "");

  if (!normalized) {
    throw new Error("ZEALOT_GATEWAY_URL is empty");
  }

  if (!/\/api$/.test(normalized)) {
    throw new Error(
      `ZEALOT_GATEWAY_URL must end with "/api" (ADR-0007), got: ${normalized}`,
    );
  }

  return normalized;
}

/**
 * Resolve the gateway base URL from the build environment.
 *
 * Every deployment (local, preview, production) must provide
 * `ZEALOT_GATEWAY_URL`; see `.env.example`.
 */
export function getGatewayURL(): string {
  const configured = process.env.ZEALOT_GATEWAY_URL;

  if (!configured?.trim()) {
    throw new Error(
      'ZEALOT_GATEWAY_URL is not set. Provide the gateway base URL ending in "/api" (see .env.example).',
    );
  }

  return normalizeGatewayURL(configured);
}
