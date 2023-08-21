import HttpError from './HttpError';

export default class BadRequest extends HttpError {
  constructor(message: string) {
    const statusCode = 400;
    super(statusCode, message);
  }
}
