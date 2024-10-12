import Joi from "joi";


const id = Joi.number();
const nombre = Joi.string().optional();
const createdAt = Joi.date().default(Date.now); 
const updatedAt = Joi.date().default(Date.now); 


const createSeccionSchema = Joi.object({
  id: id.optional(), 
  nombre: nombre,
});


const updateSeccionSchema = Joi.object({
  nombre: nombre.optional(),
});


const getSeccionSchema = Joi.object({
  id: id.required(),
});


const getSeccionSchemaByNombre = Joi.object({
  nombre: nombre.required(),
});

export {
  createSeccionSchema,
  updateSeccionSchema,
  getSeccionSchema,
  getSeccionSchemaByNombre,
};
