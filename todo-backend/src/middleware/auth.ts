import argon2 from "argon2";
import createError from "http-errors";
import { Request, Response, NextFunction } from "express";

import { SESSION_SECRET } from "secrets";
import { Prisma, PrismaClient, User } from "@prisma/client";
import session from "express-session";
import { StatusCodes } from "http-status-codes";

import { find as findUser } from "controllers/User";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.session.userId) {
      const user: User = await findUser(req.session.userId);
      next();
    }
  } catch (err) {
    return res.status(StatusCodes.UNAUTHORIZED).send(err);
  }
};
