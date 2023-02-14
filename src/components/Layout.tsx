import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <main className=" mx-[8rem]">{children}</main>
    </Fragment>
  );
};

export default Layout;
