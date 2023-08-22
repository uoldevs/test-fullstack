import { RequestHandler, Request, Response } from 'express';

const notAllowed: RequestHandler = (_req, res) =>
  res
    .status(405)
    .json({ message: 'Method not allowed' });


export default notAllowed;
