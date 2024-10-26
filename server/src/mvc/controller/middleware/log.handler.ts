import { RequestHandler } from "express";
import { logger } from "../../../log";

export const logRequestsHandler: RequestHandler = (req, res: any, next) => {
  // log start requests
  logger.info(`PETICION INICIADA | ${req.path}`);

  // log json responses
  const originalJson = res.json;

  res.json = function (body: any) {
    if (res.statusCode < 400) {
      logger.info(`PETICION FINALIZADA | STATUS CODE ${res.statusCode}`);
    } else {
      logger.error(`ALGO SALIO MAL | STATUS CODE ${res.statusCode}`);
    }
    originalJson.call(this, body);
  };

  next();
};
