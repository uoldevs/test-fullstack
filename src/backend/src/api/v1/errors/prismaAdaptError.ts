import { Prisma } from '@prisma/client';
import HttpError from './HttpError';
import errorCatalog from './HttpErrorCatalog';

export default function prismaAdaptError(error: Error) {
  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
    throw new HttpError(errorCatalog.RecordNotFound);
  }
  throw error;
}
