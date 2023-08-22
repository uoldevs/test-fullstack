import App from './app';

const PORT = Number(process.env.APP_PORT) || 3001;

new App(PORT).start();