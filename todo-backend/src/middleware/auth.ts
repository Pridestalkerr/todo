import argon2 from "argon2";
import jwt from "jsonwebtoken";
import createError from "http-errors";
import { Request, Response, NextFunction } from "express";

import Secrets from "secrets";
import { Prisma, PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

interface Tokens {
  access_token: string;
  refresh_token: string;
}

export default async (req: Request, res: Response, next: NextFunction) => {
  const { access_token, refresh_token }: Tokens = req.cookies;

  //case 1: no tokens
  if (!access_token && !refresh_token) {
    return new createError.Unauthorized("No tokens provided.");
  }

  //case 2: access_token provided
  if (access_token) {
    const id: string = jwt.verify(
      access_token,
      Secrets.JWT_SECRET_ACCESS
    ) as string;
    req.user = (await prisma.user.findUnique({
      where: { id: Number(id) },
    })) as User; // null check here
  }

  //case 3: access_token expired/unavailable but refresh_token present
  if (refresh_token) {
    const id: string = jwt.verify(
      refresh_token,
      Secrets.JWT_SECRET_REFRESH
    ) as string;
    req.user = (await prisma.user.findUnique({
      where: { id: Number(id) },
    })) as User; // null check here

    const new_access_token: string = jwt.sign(
      { id: req.user.id },
      Secrets.JWT_SECRET_REFRESH
    ) as string;
    res.cookie("access_token", new_access_token);
  }

  //case 4:
};
