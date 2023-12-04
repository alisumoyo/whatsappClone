import Signup from '@/app/componentsmui/Signup';
import Head from 'next/head';
import React from 'react';

const signup = () => {
  return (
    <>
      <Head>
        <title>SignUp</title>
        {/* <link rel="icon" href='@/app/assets/signup.ico' /> */}
      </Head>
      <Signup />
    </>
  );
};

export default signup;
