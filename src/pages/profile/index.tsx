import { useRef } from 'react';

import { useAuth } from '@/hooks/auth';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';

const Index = () => {
  const { changePw } = useAuth();

  const oldPwInputRef = useRef<HTMLInputElement | null>(null);
  const newPwInputRef = useRef<HTMLInputElement | null>(null);

  const submitHandle = (e: React.FormEvent) => {
    e.preventDefault();

    if (oldPwInputRef.current !== null && newPwInputRef.current !== null) {
      const enteredOldPw = oldPwInputRef.current.value;
      const enteredNewPw = newPwInputRef.current.value;

      const changePwBody = {
        oldPw: enteredOldPw,
        newPw: enteredNewPw,
      };

      changePw(changePwBody);
    }
  };

  return (
    <form onSubmit={submitHandle}>
      <div></div>
      <label id="oldPw">기존 비밀번호</label>
      <input ref={oldPwInputRef} type="oldPw"></input>
      <label id="newPw">새로운 비밀번호</label>
      <input ref={newPwInputRef} type="newPw"></input>
      <button>변경</button>
    </form>
  );
};

export default Index;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
