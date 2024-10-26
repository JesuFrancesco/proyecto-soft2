import { Express, Router } from "express";

import accountRouter from "./account.router";
import alumnoRouter from "./alumno.router";
import claseRouter from "./clase.router";
import profesorRouter from "./profesor.router";
import reviewRouter from "./review.router";

function routerAPI(app: Express) {
  const router = Router();

  app.use("/api/v1", router);

  router.get("/", (req, res) => {
    const authHeader = req.headers["authorization"];
    const refreshToken = req.headers["refreshtoken"];

    res.send("hola desde server express.js");
  });

  router.use("/accounts", accountRouter);
  router.use("/alumnos", alumnoRouter);
  router.use("/profesores", profesorRouter);
  router.use("/reviews", reviewRouter);
  router.use("/clases", claseRouter);
}

export { routerAPI };
