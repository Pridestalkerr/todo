import express from "express";
import { Router, Request, Response, NextFunction } from "express";

const oktaAuth = async (req: Request, res: Response, next: NextFunction) => {
  req.app.locals.oidc.ensureAuthenticated();
  next();
};

const router: Router = express.Router();

router.get("/login", oktaAuth, (req: Request, res: Response) => {
  res.send("ok");
});

router.get("/logout", (req: Request, res: Response) => {
  req.logout();
});

router.get("/check", oktaAuth, (req: Request, res: Response) => {
  res.send("ok");
});
