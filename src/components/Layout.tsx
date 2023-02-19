import { Fragment } from 'react';
import Nav from './Nav';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Nav></Nav>
      <main className="  mx-[8rem] h-full ">{children}</main>
    </Fragment>
  );
};

export default Layout;
