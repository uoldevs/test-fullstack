import HttpStatus from '../enums/HttpStatus';
import { ErrorResponseObject } from './HttpErrorCatalog';

export default class HttpError extends Error {
  public statusCode: HttpStatus;

  constructor(error: ErrorResponseObject) {
    super(error.message);
    this.statusCode = error.httpStatus;
  }
}
