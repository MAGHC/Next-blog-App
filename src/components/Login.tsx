import { BiLock, BiPen } from 'react-icons/bi';
import Link from 'next/link';

const Login = () => {
  return (
    <form className=" w-full relative flex flex-col justify-center ">
      <input
        required
        id="id"
        className=" border border-b-slate-900 pr-8 outline-none basis-12 rounded-t-lg"
        placeholder="id"
      ></input>
      <label htmlFor="id" className="  absolute top-4 right-2  text-sm font-medium">
        <BiPen />
      </label>
      <input required id="pw" className=" outline-none pr-8  basis-12" placeholder="pw"></input>
      <label htmlFor="pw" className="absolute right-2   text-sm font-medium text-slate-700">
        <BiLock />
      </label>
      <button className="  basis-12 font-light bg-bright rounded-b-lg">LOGIN</button>

      <p className=" mt-12">
        이미 회원이신가요? <Link href={'/'}>로그인</Link>
      </p>
    </form>
  );
};

export default Login;
//
