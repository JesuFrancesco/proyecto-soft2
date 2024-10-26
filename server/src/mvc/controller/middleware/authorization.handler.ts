import { RequestHandler } from "express";
import { sb } from "../../../app";
import boom from "@hapi/boom";

export const authHandler: RequestHandler = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const refreshToken = req.headers["refreshtoken"];
  const accessToken = authHeader && authHeader.split(" ")[1];

  if (refreshToken && accessToken) {
    sb.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken as string,
    });
    next();
  } else {
    throw boom.unauthorized();
  }
};
