import Joi from "joi";

const id = Joi.number();
const nombre = Joi.string().required();
const edad = Joi.number().required();
const accountId = Joi.number().optional();
const createdAt = Joi.date().default(Date.now);
const updatedAt = Joi.date().default(Date.now);

const createProfesorSchema = Joi.object({
  id: id.optional(),
  nombre: nombre,
  edad: edad,
  accountId: accountId,
});

const updateProfesorSchema = Joi.object({
  nombre: nombre.optional(),
  edad: edad.optional(),
  accountId: accountId.optional(),
});

const getProfesorSchema = Joi.object({
  id: id.required(),
});

const getProfesorSchemaByNombre = Joi.object({
  nombre: nombre.required(),
});

export {
  createProfesorSchema,
  updateProfesorSchema,
  getProfesorSchema,
  getProfesorSchemaByNombre,
};
