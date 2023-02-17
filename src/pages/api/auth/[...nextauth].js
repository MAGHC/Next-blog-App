import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectDb } from '@/lib/DB/mongoDb';
import { verifyPw } from '@/lib/HASH/hash';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(cre) {
        const client = await connectDb();

        const db = await client.db();

        const usersCollection = await db.collection('users');

        const user = await usersCollection.findOne({ email: cre.email });

        if (!user) {
          client.close();
          throw new Error('해당 유저는 없습니다.');
        }

        const isValid = await verifyPw(cre.password, user.password);

        if (!isValid) {
          client.close();
          throw new Error('비밀번호를 확인해주세요');
        }

        return { email: user.email };

        client.close();
      },
    }),
  ],
});
