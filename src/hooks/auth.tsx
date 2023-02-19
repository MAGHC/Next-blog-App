import { useFetch } from './fetch';
import { JoinT, LoginT } from '@/type/auth';

import { signIn, signOut } from 'next-auth/react';

export function useAuth() {
  const { postData } = useFetch();

  const joinHandler = async (body: JoinT) => {
    const res = await postData('api/auth/join', body);

    return res;
  };

  const loginHandler = async (body: LoginT) => {
    const res = await signIn('credentials', {
      redirect: false,
      email: body.email,
      password: body.password,
    });

    console.log(res);
  };

  const logoutHandler = async () => {
    console.log('확인');
    const res = await signOut({ redirect: false });

    return res;
  };

  const test = () => {
    console.log('dasdsadsa');
  };

  return { joinHandler, loginHandler, logoutHandler, test };
}
