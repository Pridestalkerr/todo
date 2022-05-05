import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";

import userRouter from "routers/User";

import Secrets from "secrets";

const prisma = new PrismaClient();

const main = async () => {
  dotenv.config();
  const PORT = Secrets.PORT;
  const DB_URI = Secrets.DB_URI;
  const DB_HOST = Secrets.DB_HOST;
  const DB_NAME = Secrets.DB_NAME;
  const DB_USER = Secrets.DB_USER;
  const DB_PASS = Secrets.DB_PASS;
  const FRONTEND_URL = Secrets.FRONTEND_URL;

  console.log(DB_HOST, DB_NAME, DB_USER, DB_PASS);

  const app = express();
  app.use(express.json());
  app.use(cors({ origin: FRONTEND_URL, credentials: true }));

  app.use(userRouter);

  const server = createServer();

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

main()
  .catch((error) => console.error(error))
  .finally(async () => await prisma.$disconnect());