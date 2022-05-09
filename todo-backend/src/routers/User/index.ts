import express from "express";
import { Router, Request, Response } from "express";

import UserController from "controllers/User";
import { User } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

import { registerSchema, RegisterSchema } from "./validationSchema";
import { createValidator } from "express-joi-validation";
const validator = createValidator();

const router: Router = express.Router();
// router.get("/", async (req: Request, res: Response) => {
//   res.send("hello");
// });

router.get(
  "/",
  validator.query(registerSchema),
  async (req: RegisterSchema<>, res: Response) => {
    //...
    const user: User = UserController.find();

    res.status(StatusCodes.OK).send(user);
  }
);

router.post("/", async (req: Request, res: Response) => {
  //...
});

export default router;
