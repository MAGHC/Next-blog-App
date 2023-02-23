import Login from '@/components/Login';

import FormContainer from '@/components/LoginJoinContainer';

import React from 'react';
import { getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';
import { Session } from 'next-auth';
import User from './../components/User';

const Index = ({ session }: { session: Session }) => {
  return (
    <>
      {!session && (
        <FormContainer>
          ;<Login></Login>
        </FormContainer>
      )}
      {session && <User />}
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession({ req: context.req });

  return {
    props: { session },
  };
}

export default Index;
