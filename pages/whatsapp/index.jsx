import LoggedUser from '@/app/Contexts/GetLoggedUser';
import MyContextProvider from '@/app/Contexts/MyContextProvider';
import GetRegUsersProvider from '@/app/Contexts/getRegUsers';
import Layout from '@/app/componentsmui/layout';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>Whatsapp</title>
      </Head>
      <GetRegUsersProvider>
        <LoggedUser>
          <MyContextProvider>
            <Layout />
          </MyContextProvider>
        </LoggedUser>
      </GetRegUsersProvider>
    </>
  );
};

export default index;
