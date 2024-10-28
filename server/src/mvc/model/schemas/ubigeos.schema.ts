import Joi from "joi";

const departamentoId = Joi.number();
const provinciaId = Joi.number();

const getProvinciasByDepartamento = Joi.object({
  departamentoId: departamentoId.required(),
});

const getDistritosByProvinciaAndDepartamento = Joi.object({
  departamentoId: departamentoId.required(),
  provinciaId: provinciaId.required(),
});

export { getProvinciasByDepartamento, getDistritosByProvinciaAndDepartamento };
