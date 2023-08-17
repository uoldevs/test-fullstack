import { ErrorRequestHandler } from 'express';
import { ZodError, ZodIssue } from 'zod';
import HttpStatus from '../enums/HttpStatus';
import HttpError from '../errors/HttpError';

const handleErrors: ErrorRequestHandler = (err: HttpError | ZodError, _req, res, _next) => {
  let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
  let message: string | ZodIssue[] = 'Internal server error';

  if (err instanceof HttpError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof ZodError) {
    statusCode = HttpStatus.BAD_REQUEST;
    message = err.issues;
  }

  return res.status(statusCode).json({ error: message });
};

export default handleErrors;
