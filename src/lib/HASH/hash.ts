import { hash } from 'bcrypt';

export async function hashPw(pw: string) {
  const hashedPw = await hash(pw, 12);

  return hashedPw;
}
