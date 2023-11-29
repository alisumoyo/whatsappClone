import LoggedUser, { getLoggedUser } from '@/app/Contexts/GetLoggedUser';
import MyContextProvider from '@/app/Contexts/MyContextProvider';
import Layout from '@/app/componentsmui/layout';
import { useRouter } from 'next/router';
import { useContext } from 'react';

const index = () => {
  // const router = useRouter();
  // const { user } = useContext(getLoggedUser);
  return (
    <>
      {/* {user ? ( */}
      <LoggedUser>
        <MyContextProvider>
          <Layout />
        </MyContextProvider>
      </LoggedUser>
      {/* ) : ( */}
      {/* router.push('signin') */}
      {/* )} */}
    </>
  );
};

export default index;
