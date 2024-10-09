import { Boom } from "@hapi/boom";
import { ErrorRequestHandler } from "express";
import { logger } from "../config";

/**
 * Middleware para loggear los errores
 * @param err objeto de error
 * @param req requesst
 * @param res response
 * @param next siguiente handler
 */
const logErrores: ErrorRequestHandler = (err: Error, req, res, next) => {
  console.log("log-error");
  logger.error(err);
  next(err);
};

/**
 * Middleware para atrapar los errores de boom
 */
const boomErrorHandler: ErrorRequestHandler = (err: Boom, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
};

/**
 * MIddleware para atrapar los errores del servidor
 */
const errorHandler: ErrorRequestHandler = (err: Error, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};

export { logErrores, errorHandler, boomErrorHandler };
