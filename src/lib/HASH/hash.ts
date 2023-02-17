import { hash, compare } from 'bcrypt';

export async function hashPw(pw: string) {
  const hashedPw = await hash(pw, 12);

  return hashedPw;
}

export async function verifyPw(pw: string, hashedPw: string) {
  const isValid = await compare(pw, hashedPw);
  return isValid;
}
