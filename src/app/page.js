import MyContextProvider from '@/app/Contexts/MyContextProvider';
import Layout from './componentsmui/layout';

export default function Home() {
  return (
    <>
      <MyContextProvider>
        <Layout />
      </MyContextProvider>
    </>
  );
}
