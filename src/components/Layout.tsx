import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      {/* <MainHeader></MainHeader> */}
      <main className="  mx-[8rem] h-full ">{children}</main>
    </Fragment>
  );
};

export default Layout;
