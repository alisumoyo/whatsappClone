import SignIn from '@/app/componentsmui/Signin';
import Head from 'next/head';
import React from 'react';

const signin = () => {
  return (
    <>
      <Head>
        <title>SignIn</title>
        <link rel='icon' href='./logged.ico' />
      </Head>
      <SignIn />
    </>
  );
};

export default signin;
