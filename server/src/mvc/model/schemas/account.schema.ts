import Joi from "joi";

// main attributes
const id = Joi.number();
const email = Joi.string().email();
const phone = Joi.string().max(12).min(9);

const createAccountSchema = Joi.object({
  id: id,
  email: email.required(),
});

const updateAccountSchema = Joi.object({
  email: email,
  phone: phone,
});

const getAccountSchema = Joi.object({ id: id.required() });

const getAccountSchemaByEmail = Joi.object({ email: email.required() });

export {
  createAccountSchema,
  updateAccountSchema,
  getAccountSchema,
  getAccountSchemaByEmail,
};
