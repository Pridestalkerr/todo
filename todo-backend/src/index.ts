import { PrismaClient } from "@prisma/client";
import express from "express";
import session from "express-session";
import { createServer } from "http";
import cors from "cors";
import dotenv from "dotenv";

import { RedisStore, redisClient, SessionManager } from "redisStore";

// import userRouter from "routers/User";

import * as Secrets from "secrets";
import { BACKEND_PORT } from "secrets";

const prisma = new PrismaClient();

const main = async () => {
  dotenv.config();
  console.log(Secrets);

  const app = express();
  app.set("trust proxy", 1); // trust first proxy (nginx)
  app.use(express.json());
  app.use(cors({ origin: Secrets.FRONTEND_URL, credentials: true }));

  app.use(SessionManager);

  // app.locals.oidc = oidc;

  // app.use(userRouter);

  const server = createServer();

  server.listen(BACKEND_PORT, () => {
    console.log(`Server running on port ${BACKEND_PORT}`);
  });
};

main()
  .catch((error) => console.error(error))
  .finally(async () => await prisma.$disconnect());
