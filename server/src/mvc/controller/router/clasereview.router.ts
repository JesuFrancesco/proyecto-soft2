import { Router } from "express";
import { ClaseReviewDAO } from "../../model/dao/clasereview.dao";
import { authHandler } from "../middleware/authorization.handler";
import { sb } from "../../../app";
import { AlumnoDAO } from "../../model/dao/alumno.dao";

const router = Router();
const service = new ClaseReviewDAO();
const alumnoService = new AlumnoDAO();

router.get("/", async (req, res, next) => {
  try {
    const reviews = await service.findAll();
    res.json(reviews);
  } catch (error) {
    next(error);
  }
});

router.post("/", authHandler, async (req, res, next) => {
  try {
    const data = req.body;

    const user = await sb.auth.getUser();

    const id = user.data.user?.id as string;

    const alumno = await alumnoService.findByAccountId(id);

    const review = await service.create({
      ...data,
      alumnoId: alumno.id,
    });
    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
});

export default router;
