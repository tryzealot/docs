import { initializePaddle } from "@paddle/paddle-js";

export function paddle() {
  if (!process.env.PADDLE_CLIENT_TOKEN || !process.env.PADDLE_ENV) {
    throw new Error("Paddle client token or environment not set");
  }

  const client = initializePaddle({
    token: process.env.PADDLE_CLIENT_TOKEN,
    environment: process.env.PADDLE_ENV,
  });

  return client;
}
