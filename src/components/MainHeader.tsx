import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/Logo.svg';

import { BiLogIn, BiConversation, BiMessageSquareEdit, BiLogOut } from 'react-icons/bi';

const NAV_COMMON_STYLE =
  ' transition duration-300 hover:scale-110 font-bold text-bright font-title flex items-center ';

const MainHeader = () => {
  return (
    <Head>
      <meta name="author" content="MAGHC"></meta>
      <meta name="description" content="Portfolio for MAGHC" />
      <div className="p-4 bg-slate-700 flex justify-between items-center">
        <div>
          <Image alt="logo" src={Logo} />
        </div>
        <nav className="flex gap-2">
          <Link className={NAV_COMMON_STYLE} href={'/chat'}>
            <BiConversation></BiConversation>CHAT
          </Link>
          <Link className={NAV_COMMON_STYLE} href={'/'}>
            <BiMessageSquareEdit></BiMessageSquareEdit>
            JOIN
          </Link>
          <Link className={NAV_COMMON_STYLE} href={'/'}>
            <BiLogIn></BiLogIn>
            LOGIN
          </Link>
        </nav>
      </div>
    </Head>
  );
};

export default MainHeader;