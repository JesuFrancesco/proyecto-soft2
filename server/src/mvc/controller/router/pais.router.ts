import { Router } from "express";
import { PaisDAO } from "../../model/dao/pais.dao";

const router = Router();
const service = new PaisDAO();

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const paisId = parseInt(id);

    const pais = await service.findByPk(paisId);

    res.json(pais);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const paises = await service.findAll();
    res.json(paises);
  } catch (error) {
    next(error);
  }
});

export default router;
