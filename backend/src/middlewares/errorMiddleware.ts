import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import HttpException from "utils/httpException";
import { ZodError } from "zod";

const errorMiddleware = (
  err: Error | ZodError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues[0].message });
  }
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    return res.status(400).json({ message: err.message });
  }

  const { status, message } = err as HttpException;
  console.log("ERRRO", err);

  res.status(status || 500).json({ message });
};

export default errorMiddleware;
