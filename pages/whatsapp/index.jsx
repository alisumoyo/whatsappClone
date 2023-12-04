import LoggedUser from '@/app/Contexts/GetLoggedUser';
import MyContextProvider from '@/app/Contexts/MyContextProvider';
import Layout from '@/app/componentsmui/layout';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>Whatsapp</title>
      </Head>
      <LoggedUser>
        <MyContextProvider>
          <Layout />
        </MyContextProvider>
      </LoggedUser>
    </>
  );
};

export default index;
