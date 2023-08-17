import 'dotenv/config';
import apiV1 from './api/app';

const { PORT } = process.env;

if (!PORT) {
  throw new Error('PORT is not defined in .env file');
}

apiV1.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
