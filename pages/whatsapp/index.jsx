import LoggedUser from '@/app/Contexts/GetLoggedUser';
import MyContextProvider from '@/app/Contexts/MyContextProvider';
import Layout from '@/app/componentsmui/layout';

const index = () => {
  return (
    <>
      <LoggedUser>
        <MyContextProvider>
          <Layout />
        </MyContextProvider>
      </LoggedUser>
    </>
  );
};

export default index;
