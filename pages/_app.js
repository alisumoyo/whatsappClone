// _app.js
import '../src/app/globals.css';
import ThemeContextProvider, {
  ThemeContext,
} from '@/app/Contexts/ThemeContext';

function App({ Component, pageProps }) {
  // const { theme } = useContext(ThemeContext);

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
