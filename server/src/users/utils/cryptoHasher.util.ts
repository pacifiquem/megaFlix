import * as crypto from 'crypto';

const generateBuffer = async () => {
  return crypto.randomBytes(8).toString('hex');
};

const encryptData = async (data: string) => {
  const hash = await crypto
    .createHmac(
      `${process.env.CRYPTO_ALGORITHM}`,
      `${process.env.CRYPTO_SECRET_KEY}`,
    )
    .update(data)
    .digest('hex');

  return hash;
};

const cryptoHasher = {
  generateBuffer,
  encryptData,
};

export default cryptoHasher;
