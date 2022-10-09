import crypto from 'crypto';

export const generateHash = (input: string) => {
  return crypto.createHash('md5').update(input).digest('hex');
};
