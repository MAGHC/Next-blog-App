import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectDb } from '@/lib/DB/mongoDb';
import { verifyPw, hashPw } from '@/lib/HASH/hash';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.json({ message: 'post아님확인용' });

  const session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: '로그인되지않았습니다' });
    return;
  }

  const email = session.user?.email;
  const oldPw = req.body.oldPw;
  const newPw = req.body.newPw;

  const client = await connectDb();
  const userCollection = client.db().collection('users');

  const user = await userCollection.findOne({ email });

  if (!user) {
    res.status(404).json({ messgae: '해당유저가없습니다.' });
  }

  const curPw = user && user.password;

  const isPwEqual = await verifyPw(oldPw, curPw);

  if (!isPwEqual) {
    res.status(422).json({ messgae: '기존 비밀번호를 확인해주세요' });
    client.close();
    return;
  }

  const hashedPw = await hashPw(newPw);

  const result = await userCollection.updateOne({ email }, { $set: { password: hashedPw } });

  client.close();

  res.status(200).json({ message: '변경이완료되었습니다.' });
}
