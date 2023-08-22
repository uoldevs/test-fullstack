import { store } from '@/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import Head from 'next/head';
import { Provider } from 'react-redux';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Head>
        <title>Customers Manager</title>
        <meta
          name="description"
          content="Uma plataforma que facilita o gerenciamento da sua oficina mecânica"
        />
        <meta name="keywords" content="" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
