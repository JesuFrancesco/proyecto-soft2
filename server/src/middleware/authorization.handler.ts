import { RequestHandler, RequestParamHandler } from "express";
import { config } from "../config";
import boom from "@hapi/boom";

export const authHandler: RequestHandler = (req, res, next) => {
  const { api } = req.headers;
  if (api === config.jwtSecret) {
    next();
  } else {
    throw boom.unauthorized();
  }
};
