import _ from "lodash";
import { Router } from "express";
import { AccountDAO } from "../../model/dao/account.dao";
import { authHandler } from "../middleware/authorization.handler";
import { AlumnoDAO } from "../../model/dao/alumno.dao";
import { ProfesorDAO } from "../../model/dao/profesor.dao";
import { sb } from "../../../app";

const router = Router();
const alumnoRouter = Router();
const profesorRouter = Router();

const accountService = new AccountDAO();
const alumnoService = new AlumnoDAO();
const profesorService = new ProfesorDAO();

// router auth
router.use(authHandler);

// #=====================
// | /account/...
// #=====================
router.get("/", async (req, res, next) => {
  try {
    const user = await sb.auth.getUser();

    const id = user.data.user?.id as string;

    const account = await accountService.findByPk(id);

    res.json(account);
  } catch (error) {
    next(error);
  }
});

router.post("/setup-alumno", async (req, res, next) => {
  try {
    const data = req.body;

    const user = await sb.auth.getUser();

    const id = user.data.user?.id as string;

    const account = await accountService.setupAlumnoAccount(id, data);

    res.json(account);
  } catch (error) {
    next(error);
  }
});

router.post("/setup-profesor", async (req, res, next) => {
  try {
    const data = req.body;

    const user = await sb.auth.getUser();

    const id = user.data.user?.id as string;

    const account = await accountService.setupProfesorAccount(id, data);

    res.json(account);
  } catch (error) {
    next(error);
  }
});

router.use("/alumno", alumnoRouter);
router.use("/profesor", profesorRouter);

// #=====================
// | /account/alumno/...
// #=====================
alumnoRouter.get("/", async (req, res, next) => {
  try {
    const user = await sb.auth.getUser();

    const id = user.data.user?.id as string;

    const alumno = await alumnoService.findByAccountId(id);

    res.json(alumno);
  } catch (error) {
    next(error);
  }
});

alumnoRouter.get("/clases", async (req, res, next) => {
  try {
    const user = await sb.auth.getUser();

    const id = user.data.user?.id as string;

    const alumno = await alumnoService.findByAccountId(id);

    const clases = await alumnoService.findAlumnoClases(alumno.id);

    res.json(clases);
  } catch (error) {
    next(error);
  }
});

alumnoRouter.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const accountId = parseInt(id);

    const data = req.body;

    const account = await accountService.update(accountId, data);

    res.json(account);
  } catch (error) {
    next(error);
  }
});

// #=====================
// | /account/profesor/...
// #=====================
profesorRouter.get("/", async (req, res, next) => {
  try {
    const user = await sb.auth.getUser();

    const id = user.data.user?.id as string;

    const alumno = await profesorService.findByAccountId(id);

    res.json(alumno);
  } catch (error) {
    next(error);
  }
});

export default router;
