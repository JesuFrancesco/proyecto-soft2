import Joi from "joi";

const id = Joi.number();
const curso = Joi.string().optional();
const ubicacion = Joi.number().optional();
const esVirtual = Joi.boolean().optional();
const esGrupal = Joi.boolean().optional();
const fechaClase = Joi.date().iso().required();
const idProfesor = Joi.number().optional();

const createClaseSchema = Joi.object({
  id: id.optional(),
  curso: curso,
  ubicacion: ubicacion,
  esVirtual: esVirtual,
  esGrupal: esGrupal,
  fechaClase: fechaClase,
  idProfesor: idProfesor,
});

const updateClaseSchema = Joi.object({
  curso: curso.optional(),
  ubicacion: ubicacion.optional(),
  esVirtual: esVirtual.optional(),
  esGrupal: esGrupal.optional(),
  fechaClase: fechaClase.optional(),
  idProfesor: idProfesor.optional(),
});

const getClaseSchema = Joi.object({
  id: id.required(),
});

const getClaseSchemaByProfesorId = Joi.object({
  idProfesor: idProfesor.required(),
});

export {
  createClaseSchema,
  updateClaseSchema,
  getClaseSchema,
  getClaseSchemaByProfesorId,
};
