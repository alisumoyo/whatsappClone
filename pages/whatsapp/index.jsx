import GetAddedUsersProvider from '@/app/Contexts/GetAddedUsers.jsx';
import LoggedUser from '@/app/Contexts/GetLoggedUser';
import MyContextProvider from '@/app/Contexts/MyContextProvider';
import GetRegUsersProvider from '@/app/Contexts/getRegUsers';
import Layout from '@/app/componentsmui/layout';
import Head from 'next/head';

const whatsapp = () => {
  return (
    <>
      <Head>
        <title>Whatsapp</title>
        <link rel='icon' href='./whatsapp.ico' />
      </Head>

      <GetAddedUsersProvider>
        <GetRegUsersProvider>
          <LoggedUser>
            <MyContextProvider>
              <Layout />
            </MyContextProvider>
          </LoggedUser>
        </GetRegUsersProvider>
      </GetAddedUsersProvider>
    </>
  );
};

export default whatsapp;
