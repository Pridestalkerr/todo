import express from "express";
import { Router, Request, Response } from "express";

import UserController from "controllers/User";
import { User } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

import { signInSchema, SignInSchemaT } from "./validationSchema";
import { createValidator, ValidatedRequest } from "express-joi-validation";
const validator = createValidator({ passError: true });

const router: Router = express.Router();

router.get("/status", (req: Request, res: Response) => {});

router.post(
  "/signIn",
  validator.query(signInSchema),
  async (req: ValidatedRequest<SignInSchemaT>, res: Response) => {
    try {
      const { email, password }: { email: string; password: string } = req.body;
      const user: User = await UserController.signIn(email, password);
      req.session.userId = user.id;

      return res.status(StatusCodes.OK).send(user);
    } catch (err) {
      return res.status(StatusCodes.BAD_REQUEST).send(err);
    }
  }
);

router.delete("/signOut", async (req: Request, res: Response) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        throw err;
      } else {
        return res
          .clearCookie("sessionId", { path: "/" })
          .status(StatusCodes.OK)
          .send("signed out");
      }
    });
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).send(err);
  }
});

router.post("/signUp", (req: Request, res: Response) => {
  res.send("ok");
});
