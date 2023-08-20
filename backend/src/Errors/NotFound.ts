import HttpError from './HttpError';

export default class NotFound extends HttpError {
  constructor(message: string) {
    const statusCode = 404;
    super(statusCode, message);
  }
}
