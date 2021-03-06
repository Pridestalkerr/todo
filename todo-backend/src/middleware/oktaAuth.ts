import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  req.app.locals.oidc.ensureAuthenticated();
  next();
};
