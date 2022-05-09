import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Joi from "joi";
import { getSchema } from "routers/User/validationSchema";

export default (schema: Joi.ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = await schema.validateAsync(req.body);
      next();
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST);
    }
  };
};
