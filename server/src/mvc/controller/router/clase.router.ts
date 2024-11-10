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

router.get("/query/:query", async (req, res, next) => {
  try {
    const { query } = req.params;

    const clases = await service.findByQuery(query);

    res.json(clases);
  } catch (error) {
    next(error);
  }
});

router.post("/filter-especialidad", async (req, res, next) => {
  try {
    const { especialidades } = req.body;

    const clases = await service.findByEspecialidades(especialidades);

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
