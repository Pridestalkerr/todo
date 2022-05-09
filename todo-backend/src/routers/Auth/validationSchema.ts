import {
  ContainerTypes,
  createValidator,
  ValidatedRequestSchema,
} from "express-joi-validation";
import Joi from "joi";

const signInSchema: Joi.ObjectSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  username: Joi.string().min(8).required(),
  password: Joi.string().min(8).required(),
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
});

interface SignInSchemaT extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };
}

const getSchema: Joi.ObjectSchema = Joi.object({
  id: Joi.number().required(),
});

export { signInSchema, SignInSchemaT };
