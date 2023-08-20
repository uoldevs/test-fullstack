import { store } from '@/app/redux/store';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        router.push('/users');
    });

    return (
        <Provider store={store}>
            <Component {...pageProps} />{' '}
        </Provider>
    );
}

export default MyApp;
