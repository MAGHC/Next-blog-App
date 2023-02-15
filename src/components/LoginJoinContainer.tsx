import Logo from '@/assets/Logo.svg';

import Image from 'next/image';

import { useRouter } from 'next/router';

const FormContainer = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div
      className=" flex 
     justify-center items-center h-full min-h-[16rem]  "
    >
      <div className="p-20 bg-slate-500 rounded-lg">
        <div className="flex flex-col items-center mb-8 gap-4">
          <Image width={120} src={Logo} alt="logo"></Image>
          <span>{router.pathname === '/' ? 'Login' : 'Join'}</span>
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default FormContainer;
