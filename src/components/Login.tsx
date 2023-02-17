import Link from 'next/link';

import { useRef } from 'react';

import { useAuth } from '@/hooks/auth';

import { BiLock, BiPen } from 'react-icons/bi';

const Login = () => {
  const { loginHandler } = useAuth();

  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (emailRef.current !== null && pwRef.current !== null) {
      const enteredEmail = emailRef.current.value;
      const enteredPw = pwRef.current.value;

      const body = { email: enteredEmail, password: enteredPw };

      loginHandler(body);
    }
  }

  return (
    <form onSubmit={submitHandler} className=" w-full relative flex flex-col justify-center ">
      <input
        ref={emailRef}
        required
        id="id"
        className=" border border-b-slate-900 pr-8 outline-none basis-12 rounded-t-lg"
        placeholder="id"
      ></input>
      <label htmlFor="id" className="  absolute top-4 right-2  text-sm font-medium">
        <BiPen />
      </label>
      <input
        ref={pwRef}
        required
        id="pw"
        className=" outline-none pr-8  basis-12"
        placeholder="pw"
      ></input>
      <label htmlFor="pw" className="absolute right-2   text-sm font-medium text-slate-700">
        <BiLock />
      </label>
      <button className="  basis-12 font-light bg-bright rounded-b-lg">LOGIN</button>

      <p className=" text-center mt-12">
        회원이 아니신가요? <Link href={'/join'}>Join</Link>
      </p>
    </form>
  );
};

export default Login;
//
