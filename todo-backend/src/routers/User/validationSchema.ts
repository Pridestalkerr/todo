import {
  ContainerTypes,
  createValidator,
  ValidatedRequestSchema,
} from "express-joi-validation";
import Joi from "joi";

const registerSchema: Joi.ObjectSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(8).required(),
});

interface RegisterSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    email: string;
    password: string;
  };
}

const getSchema: Joi.ObjectSchema = Joi.object({
  id: Joi.number().required(),
});

export { registerSchema, RegisterSchema };
