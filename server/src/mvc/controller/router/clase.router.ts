import { Router } from "express";
import { ClaseDAO } from "../../model/dao/clase.dao";

const router = Router();
const service = new ClaseDAO();

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const claseId = parseInt(id);

    const clase = await service.findByPk(claseId);
    res.json(clase);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const clases = await service.findAll();
    res.json(clases);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const clase = await service.create(data);
    res.status(201).json(clase);
  } catch (error) {
    next(error);
  }
});

router.post("/matricula", async (req, res, next) => {
  try {
    const data = req.body;
    const { alumnoId, claseId } = data;
    const response = await service.matricularAlumnoEnClase(alumnoId, claseId);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const claseId = parseInt(id);

    const clase = await service.deleteByPk(claseId);
    res.json(clase);
  } catch (error) {
    next(error);
  }
});

export default router;
