import LoggedUser from '@/app/Contexts/GetLoggedUser';
import MyContextProvider from '@/app/Contexts/MyContextProvider';
// import SignIn from '@/app/componentsmui/Signin';
// import Signup from '@/app/componentsmui/Signup';
import Layout from '@/app/componentsmui/layout';

const Whatsappweb = () => {
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

export default Whatsappweb;
