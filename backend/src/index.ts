import 'dotenv/config';
import app from './api/app';

const { PORT } = process.env;

if (!PORT) {
  throw new Error('PORT is not defined in .env file');
}

app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
