import Joi from "joi";

const id = Joi.number();
const ensenanza = Joi.number().optional();
const puntualidad = Joi.number().optional();
const disponibilidad = Joi.number().optional();
const comunicacion = Joi.number().optional();
const evaluacion = Joi.number().optional();
const empatia = Joi.number().optional();
const idProfesor = Joi.number().optional();
const idAlumno = Joi.number().optional();
const createdAt = Joi.date().default(Date.now);
const updatedAt = Joi.date().default(Date.now);

const createReviewSchema = Joi.object({
  id: id.optional(),
  ensenanza: ensenanza,
  puntualidad: puntualidad,
  disponibilidad: disponibilidad,
  comunicacion: comunicacion,
  evaluacion: evaluacion,
  empatia: empatia,
  idProfesor: idProfesor,
  idAlumno: idAlumno,
});

const updateReviewSchema = Joi.object({
  ensenanza: ensenanza.optional(),
  puntualidad: puntualidad.optional(),
  disponibilidad: disponibilidad.optional(),
  comunicacion: comunicacion.optional(),
  evaluacion: evaluacion.optional(),
  empatia: empatia.optional(),
  idProfesor: idProfesor.optional(),
  idAlumno: idAlumno.optional(),
});

const getReviewSchema = Joi.object({
  id: id.required(),
});

const getReviewSchemaByProfesorId = Joi.object({
  idProfesor: idProfesor.required(),
});

const getReviewSchemaByAlumnoId = Joi.object({
  idAlumno: idAlumno.required(),
});

export {
  createReviewSchema,
  updateReviewSchema,
  getReviewSchema,
  getReviewSchemaByProfesorId,
  getReviewSchemaByAlumnoId,
};
