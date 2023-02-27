import { useRouter } from 'next/router';

import { useFetch } from './fetch';

import { JoinT, LoginT } from '@/type/auth';
import { ChangePwT } from './../type/user';

import { signIn, signOut } from 'next-auth/react';
import { AxiosError } from 'axios';

export function useAuth() {
  const { postData } = useFetch();
  const router = useRouter();

  const joinHandler = async (body: JoinT) => {
    const res = await postData('api/auth/join', body);

    return res;
  };

  const loginHandler = async (body: LoginT) => {
    signIn('credentials', {
      redirect: false,
      email: body.email,
      password: body.password,
    })
      .then(() => {
        router.replace('/profile');
      })
      .catch((err: Error | AxiosError) => {
        alert(err);
      });
  };

  const logoutHandler = async () => {
    console.log('확인');
    const res = await signOut({ redirect: false });

    return res;
  };

  const changePw = async (body: ChangePwT) => {
    postData('api/user/change-pw', body)
      .then(console.log)
      .catch((err: Error | AxiosError) => {
        alert(err);
      });
  };

  const test = () => {
    console.log('dasdsadsa');
  };

  return { joinHandler, loginHandler, logoutHandler, changePw, test };
}
