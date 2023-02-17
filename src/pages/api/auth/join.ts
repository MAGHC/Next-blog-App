import type { NextApiRequest, NextApiResponse } from 'next';

import { connectDb } from '@/lib/DB/mongoDb';

import { JoinT } from '@/type/auth';
import { hashPw } from '@/lib/HASH/hash';

export default async function join(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await connectDb();
    const db = client.db();

    const { email, nickName, password }: JoinT = data;

    if (!email || !nickName || !password) {
      res.status(422).json({ message: '이메일,닉네임,패스워드를 확인해주세요' });
    }

    const hashedPw = hashPw(password);

    const result = await db.collection('users').insertOne({
      email: email,
      password: hashedPw,
      nickName: nickName,
    });

    res.status(201).json({ message: '생성되었습니다.', data: data });
  } else {
    res.status(200).json({ message: 'getMethod확인용' });
  }
}
