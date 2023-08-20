import { ErrorRequestHandler } from 'express';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';

const zodErrorHandler: ErrorRequestHandler = (err, _req, res) => {
  console.group('Error Handler');
  console.error(err);
  console.groupEnd();

  const formatedError = fromZodError(err);

  return res.status(403).json({
    status: 'error',
    code: 403,
    message: formatedError.toString(),
    details: formatedError.details
  });
};


const globalErrorHandler: ErrorRequestHandler = (err, _req, res, next) => {
  // Zod Errors
  if (err instanceof z.ZodError) return zodErrorHandler(err, _req, res, next);

  return res.status(500).json({
    status: 'error',
    code: 500,
    message: err.message
  });
};

export default globalErrorHandler;
