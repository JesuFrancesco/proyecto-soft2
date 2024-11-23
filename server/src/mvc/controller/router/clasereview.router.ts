import { Router } from "express";
import { ClaseReviewDAO } from "../../model/dao/clasereview.dao";

const router = Router();
const service = new ClaseReviewDAO();

router.get("/", async (req, res, next) => {
  try {
    const reviews = await service.findAll();
    res.json(reviews);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const review = await service.create(data);
    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
});

export default router;
