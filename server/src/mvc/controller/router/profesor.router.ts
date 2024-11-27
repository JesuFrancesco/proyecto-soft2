import { Router } from "express";
import { ProfesorDAO } from "../../model/dao/profesor.dao";

const router = Router();
const service = new ProfesorDAO();

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const profesorId = parseInt(id);

    const profesor = await service.findByPk(profesorId);
    res.json(profesor);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    // const profesores = await service.findAll();
    const profesores = await service.findAllByRating();
    res.json(profesores);
  } catch (error) {
    next(error);
  }
});

router.get("/query/:query", async (req, res, next) => {
  try {
    const { query } = req.params;

    const profesores = await service.findByQuery(query);

    res.json(profesores);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const profesor = await service.create(data);
    res.status(201).json(profesor);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const profesorId = parseInt(id);

    const profesor = await service.deleteByPk(profesorId);
    res.json(profesor);
  } catch (error) {
    next(error);
  }
});

export default router;
