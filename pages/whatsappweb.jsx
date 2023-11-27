import MyContextProvider from '@/app/Contexts/MyContextProvider';
// import SignIn from '@/app/componentsmui/Signin';
// import Signup from '@/app/componentsmui/Signup';
import Layout from '@/app/componentsmui/layout';

const Whatsappweb = () => {
  return (
    <>
      <MyContextProvider>
        <Layout />
      </MyContextProvider>
    </>
  );
};

export default Whatsappweb;
