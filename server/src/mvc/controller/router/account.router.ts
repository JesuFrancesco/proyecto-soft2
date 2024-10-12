import _ from "lodash";
import { Router } from "express";
import { validatorHandler } from "../middleware/validator.handler";
import {
  createAccountSchema,
  getAccountSchema,
  getAccountSchemaByEmail,
  updateAccountSchema,
} from "../../model/schemas/account.schema";
import { AccountDAO } from "../../model/dao/account.dao";

const router = Router();
const service = new AccountDAO();

router.get(
  "/:id",
  validatorHandler(getAccountSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const accountId = parseInt(id);

      const account = await service.findByPk(accountId);

      res.json(account);
    } catch (error) {
      next(error);
    }
  }
);

router.get("/", async (req, res, next) => {
  try {
    const accounts = await service.findAll();
    res.json(accounts);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/email/:email",
  validatorHandler(getAccountSchemaByEmail, "params"),
  async (req, res, next) => {
    try {
      const { email } = req.params;

      const account = await service.findByEmail(email);

      res.json(account);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  validatorHandler(getAccountSchemaByEmail, "params"),
  validatorHandler(updateAccountSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const accountId = parseInt(id);

      const data = req.body;

      const account = await service.update(accountId, data);

      res.json(account);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createAccountSchema, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const account = await service.create(data);
      res.json(account);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
