import Joi from "joi";

// main attributes
const id = Joi.number();
const name = Joi.string();
const email = Joi.string().email();
const phone = Joi.string().max(12).min(9);
const password = Joi.string();
const role = Joi.string();

const createAccountSchema = Joi.object({
  id: id,
  name: name.required(),
  email: email.required(),
  password: password.required(),
  role,
});

const updateAccountSchema = Joi.object({
  email: email,
  password: password,
  role: role,
  phone: phone,
});

const getAccountSchema = Joi.object({ id: id.required() });

const getAccountSchemaByEmail = Joi.object({ email: email.required() });

export { createAccountSchema, updateAccountSchema, getAccountSchema, getAccountSchemaByEmail };
