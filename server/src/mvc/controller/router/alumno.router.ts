import _ from "lodash";
import { Router } from "express";
import { AlumnoDAO } from "../../model/dao/alumno.dao";

const router = Router();
const service = new AlumnoDAO();

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const alumnoId = parseInt(id);

    const alumno = await service.findByPk(alumnoId);

    res.json(alumno);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const alumnos = await service.findAll();
    res.json(alumnos);
  } catch (error) {
    next(error);
  }
});

// router.get("/email/:email", async (req, res, next) => {
//   try {
//     const { email } = req.params;
//     const alumno = await service.findByEmail(email);
//     res.status(201).json(alumno);
//   } catch (error) {
//     next(error);
//   }
// });

// router.get("/clases/email/:email", async (req, res, next) => {
//   try {
//     const { email } = req.params;
//     const alumno = await service.findAlumnoClases(email);
//     res.status(201).json(alumno);
//   } catch (error) {
//     next(error);
//   }
// });

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const alumnoId = parseInt(id);

    const alumno = await service.deleteByPk(alumnoId);
    res.json(alumno);
  } catch (error) {
    next(error);
  }
});

export default router;
