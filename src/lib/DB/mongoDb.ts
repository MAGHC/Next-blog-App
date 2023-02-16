import { MongoClient } from 'mongodb';

export async function connectDb() {
  const client = await MongoClient.connect(
    `mongodb+srv://administrator:${process.env.NEXT_PUBLIC_MONGODB_PW}@cluster0.aapwhd8.mongodb.net/next-blog?retryWrites=true&w=majority`,
  );

  return client;
}
