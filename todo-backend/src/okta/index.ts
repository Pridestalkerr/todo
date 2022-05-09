import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import session from "express-session";
import { ExpressOIDC } from "@okta/oidc-middleware";

// import userRouter from "routers/User";

import Secrets from "secrets";

const prisma = new PrismaClient();

const main = async () => {
  dotenv.config();
  const BACKEND_PORT = Secrets.BACKEND_PORT;
  const DB_URI = Secrets.DB_URI;
  const DB_HOST = Secrets.DB_HOST;
  const DB_NAME = Secrets.DB_NAME;
  const DB_USER = Secrets.DB_USER;
  const DB_PASS = Secrets.DB_PASS;
  const FRONTEND_URL = Secrets.FRONTEND_URL;

  console.log(DB_HOST, DB_NAME, DB_USER, DB_PASS);

  const oidc = new ExpressOIDC({
    client_id: Secrets.OKTA_CLIENT_ID,
    client_secret: Secrets.OKTA_CLIENT_SECRET,
    issuer: `${Secrets.OKTA_ORG_URL}/oauth2/default`,
    redirect_uri: `${Secrets.FRONTEND_URL}/authorization-code/callback`, // change this to backend maybe.. should be easier
    appBaseUrl: `${Secrets.FRONTEND_URL}`,
    scope: "openid profile",
  });

  const app = express();
  app.use(express.json());
  app.use(cors({ origin: FRONTEND_URL, credentials: true }));

  app.use(
    session({
      resave: true,
      saveUninitialized: false,
      secret: Secrets.JWT_SECRET_ACCESS,
    })
  );

  app.use(oidc.router);
  app.locals.oidc = oidc;

  // app.use(userRouter);

  const server = createServer();

  server.listen(BACKEND_PORT, () => {
    console.log(`Server running on port ${BACKEND_PORT}`);
  });
};

main()
  .catch((error) => console.error(error))
  .finally(async () => await prisma.$disconnect());
