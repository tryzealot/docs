/**
 * Encryption utility functions - using AES-GCM algorithm
 */

const salt = process.env.ZEALOT_ENCRYPTION_SALT;
if (!salt) {
  throw new Error("ZEALOT_ENCRYPTION_SALT is not defined");
}

/**
 * Generate encryption key from string
 * @param keyString - Key string
 * @returns Promise<CryptoKey>
 */
async function generateKey(keyString: string): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(keyString);

  // Derive 256-bit key from key string using PBKDF2
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    keyData,
    'PBKDF2',
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: encoder.encode(salt),
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

/**
 * Encrypt text
 * @param text - Text to encrypt
 * @param secretKey - Encryption key (32 characters)
 * @returns Returns format: base64(iv):base64(encrypted data)
 */
export async function encrypt(text: string, secretKey: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);

  // Generate random IV (12 bytes)
  const iv = crypto.getRandomValues(new Uint8Array(12));

  // Generate key
  const key = await generateKey(secretKey);

  // Encrypt
  const encrypted = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    key,
    data
  );

  // Convert to base64
  const ivBase64 = btoa(String.fromCharCode(...iv));
  const encryptedBase64 = btoa(String.fromCharCode(...new Uint8Array(encrypted)));

  return `${ivBase64}:${encryptedBase64}`;
}

/**
 * Decrypt text
 * @param encryptedData - Encrypted data (format: base64(iv):base64(encrypted data))
 * @param secretKey - Encryption key (32 characters)
 * @returns Decrypted text
 */
export async function decrypt(encryptedData: string, secretKey: string): Promise<string> {
  const [ivBase64, encryptedBase64] = encryptedData.split(':');

  if (!ivBase64 || !encryptedBase64) {
    throw new Error("Invalid encrypted data format");
  }

  // Parse IV
  const iv = new Uint8Array(
    atob(ivBase64)
      .split('')
      .map((c) => c.charCodeAt(0))
  );

  // Parse encrypted data
  const encrypted = new Uint8Array(
    atob(encryptedBase64)
      .split('')
      .map((c) => c.charCodeAt(0))
  );

  // Generate key
  const key = await generateKey(secretKey);

  // Decrypt
  const decrypted = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    key,
    encrypted
  );

  // Convert to string
  const decoder = new TextDecoder();
  return decoder.decode(decrypted);
}