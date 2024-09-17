import { Router } from "express";
import { validatorHandler } from "../middleware/validator.handler";
import AccountService from "../service/account.service";
import _ from "lodash";
import { createAccountSchema, getAccountSchema, getAccountSchemaByEmail, updateAccountSchema } from "../schemas/account.schema";

const router = Router();
const service = new AccountService();

router.get(
  "/:id",
  validatorHandler(getAccountSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const accountId = parseInt(id);

      const account = await service.findOneAccount(accountId);

      res.json(account);
    } catch (error) {
      next(error);
    }
  }
);

router.get("/", async (req, res, next) => {
  try {
    const accounts = await service.findAllAccounts();
    res.json(accounts);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(createAccountSchema, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const account = await service.createAccount(data);
      res.json(account);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
