import * as express from 'express';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import * as cors from 'cors';
import globalErrorHandler from './error/error-handler';
import { AppDataSource } from './database/data-source';
import router from './routes/router';

dotenv.config();
export default class App {
  private app: express.Express;

  constructor() {
    this.app = express();
    this.connectToDatabase();
    this.config();

    this.app.use('/', router);

    this.app.use(globalErrorHandler);
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
  }

  private async connectToDatabase() {
    await AppDataSource.initialize();
  }

  start(PORT: number | string): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}
