import { Router } from "express";
import { EspecialidadDAO } from "../../model/dao/especialidad.dao";

const router = Router();
const service = new EspecialidadDAO();

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const preferenciaId = parseInt(id);

    const preferencia = await service.findByPk(preferenciaId);
    res.json(preferencia);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const preferencias = await service.findAll();
    res.json(preferencias);
  } catch (error) {
    next(error);
  }
});

export default router;
