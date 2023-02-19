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

    const existEmail = await db.collection('users').findOne({ email });

    if (existEmail) {
      res.status(422).json({ message: '이미 존재하는 유저입니다.' });
      client.close();
      return;
    }
    if (!email || !nickName || !password) {
      res.status(422).json({ message: '이메일,닉네임,패스워드를 확인해주세요' });
      client.close();
      return;
    }

    const hashedPw = await hashPw(password);

    const result = await db.collection('users').insertOne({
      email,
      password: hashedPw,
      nickName: nickName,
    });

    res.status(201).json({ message: '생성되었습니다.', data: data });
    client.close();
  } else {
    res.status(200).json({ message: 'getMethod확인용' });
  }
}
