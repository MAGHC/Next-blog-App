import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PATCH') return;

  const session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: '로그인되지않았습니다' });
    return;
  }
}
