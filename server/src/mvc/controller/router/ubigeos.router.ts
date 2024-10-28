import { Router } from "express";
import { UbigeoDAO } from "../../model/dao/ubigeo.dao";
import { validatorHandler } from "../middleware/validator.handler";
import {
  getDistritosByProvinciaAndDepartamento,
  getProvinciasByDepartamento,
} from "../../model/schemas/ubigeos.schema";

const router = Router();

const service = new UbigeoDAO();

router.get("/departamentos", async (req, res, next) => {
  try {
    const departamentos = await service.findAllDepartamentos();

    res.json(departamentos);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/provincias",
  validatorHandler(getProvinciasByDepartamento, "query"),
  async (req, res, next) => {
    try {
      const { departamentoId } = req.query as { departamentoId: string };

      const provincias = await service.findProvinciasByDepartamento(
        departamentoId
      );

      res.json(provincias);
    } catch (error) {
      next(error);
    }
  }
);
router.get(
  "/distritos",
  validatorHandler(getDistritosByProvinciaAndDepartamento, "query"),
  async (req, res, next) => {
    try {
      const { departamentoId, provinciaId } = req.query as {
        departamentoId: string;
        provinciaId: string;
      };
      const distritos = await service.findDistritosByDepartamentoAndProvincia(
        departamentoId,
        provinciaId
      );

      res.json(distritos);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
