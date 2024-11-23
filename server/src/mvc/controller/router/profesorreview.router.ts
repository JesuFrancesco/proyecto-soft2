import { Router } from "express";
import { ProfesorReviewDAO } from "../../model/dao/profesorreview.dao";
import { authHandler } from "../middleware/authorization.handler";

const router = Router();
const service = new ProfesorReviewDAO();

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
    const review = await service.create(data);
    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
});

export default router;
