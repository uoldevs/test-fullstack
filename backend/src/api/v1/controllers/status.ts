import { Request, Response } from 'express';
import * as statusService from '../services/status';
import HttpStatus from '../enums/HttpStatus';

export async function listStatus(req: Request, res: Response) {
  const status = await statusService.listStatus();
  res.status(HttpStatus.OK).json(status);
}

export default { listStatus };
