// import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import { Provider } from 'next-auth/client';
import AppProvider from '../contexts/AppContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </AppProvider>
  )
  // return <Component {...pageProps} />
}

export default MyApp
