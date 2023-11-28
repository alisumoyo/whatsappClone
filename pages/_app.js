import MyContextProvider from '@/app/Contexts/MyContextProvider';
import '../styles.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MyContextProvider>
        <Component {...pageProps} />
      </MyContextProvider>
    </>
  );
}
