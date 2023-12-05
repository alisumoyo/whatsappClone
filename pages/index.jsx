import Landing from '@/app/componentsmui/Landing';
import Head from 'next/head';
import React from 'react';

const index = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='./whatsapp.ico' />
      </Head>
      <Landing />
    </>
  );
};

export default index;
