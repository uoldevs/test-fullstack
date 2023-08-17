import HttpStatus from '../enums/HttpStatus';

export enum ErrorTypes {
  InvalidId = 'InvalidId',
  RecordNotFound = 'RecordNotFound',
}

export type ErrorResponseObject = {
  message: string;
  httpStatus: HttpStatus;
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

const errorCatalog: ErrorCatalog = {
  InvalidId: {
    message: 'Id must be a positive integer',
    httpStatus: HttpStatus.BAD_REQUEST,
  },
  RecordNotFound: {
    message: 'Record not found',
    httpStatus: HttpStatus.NOT_FOUND,
  },
};

export default errorCatalog;
