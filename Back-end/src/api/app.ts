import express from 'express';
import 'express-async-errors';

import router from './routes';
import ErrorHandlerMiddleware from './middlewares/errorMiddeware';

export default class App {
  private app: express.Express;
  private port: number;
  // private errorHandlerMiddleware: ErrorHandlerMiddleware;
  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.config();
    // this.errorHandlerMiddleware = new ErrorHandlerMiddleware();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,DELETE,OPTIONS,PUT,PATCH'
      );
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use(router);
    this.app.use(ErrorHandlerMiddleware.handle);
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}
