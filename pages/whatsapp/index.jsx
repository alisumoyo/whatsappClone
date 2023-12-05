import GetAddedUsers from '@/app/Contexts/GetAddedUsers.jsx';
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
        <link rel='icon' href='./whatsapp.ico' />
      </Head>
      <GetAddedUsers>
        <GetRegUsersProvider>
          <LoggedUser>
            <MyContextProvider>
              <Layout />
            </MyContextProvider>
          </LoggedUser>
        </GetRegUsersProvider>
      </GetAddedUsers>
    </>
  );
};

export default index;
