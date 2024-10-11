import Joi from "joi";

// main attributes
const id = Joi.number();
const nombre = Joi.string();
const edad = Joi.number().max(18);

const createAlumnoSchema = Joi.object({
  id: id,
  nombre: nombre.required(),
  edad: edad.required(),
});

const updateAlumnoSchema = Joi.object({
  nombre: nombre,
  edad: edad,
});

const getAlumnoSchema = Joi.object({ id: id.required() });

const getAlumnoSchemaByNombre = Joi.object({ nombre: nombre.required() });

export {
  createAlumnoSchema,
  updateAlumnoSchema,
  getAlumnoSchema,
  getAlumnoSchemaByNombre,
};
