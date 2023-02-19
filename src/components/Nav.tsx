import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { useSession } from 'next-auth/react';

import Logo from '@/assets/Logo.svg';

import { BiLogIn, BiMessageSquareEdit, BiLogOut } from 'react-icons/bi';

import { useAuth } from '@/hooks/auth';

const NAV_COMMON_STYLE =
  ' mx-2 transition duration-300 gap-1 hover:scale-110 font-bold text-bright font-title flex items-center ';

const Nav = () => {
  const { data: session, status } = useSession();

  const { logoutHandler } = useAuth();

  console.log(session);

  return (
    <>
      <div className="p-4 w-full bg-slate-700 flex justify-between items-center">
        <Link className={NAV_COMMON_STYLE} href={'/'}>
          <Image width={120} height={20} alt="logo" src={Logo} />
        </Link>
        <nav className="flex gap-2">
          {!session && (
            <>
              <Link className={NAV_COMMON_STYLE} href={'/join'}>
                <BiMessageSquareEdit></BiMessageSquareEdit>
                JOIN
              </Link>
              <Link className={NAV_COMMON_STYLE} href={'/'}>
                <BiLogIn></BiLogIn>
                LOGIN
              </Link>
            </>
          )}
          {session && (
            <button onClick={logoutHandler} className={NAV_COMMON_STYLE}>
              <BiLogOut></BiLogOut>
              LOGOUT
            </button>
          )}
        </nav>
      </div>
    </>
  );
};

export default Nav;
