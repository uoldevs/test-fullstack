import { store } from '@/app/redux/store';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />{' '}
        </Provider>
    );
}

export default MyApp;
