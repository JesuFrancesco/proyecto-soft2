import { Router } from "express";
import { ReviewDAO } from "../../model/dao/review.dao";

const router = Router();
const service = new ReviewDAO();

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const reviewId = parseInt(id);

    const review = await service.findByPk(reviewId);
    res.json(review);
  } catch (error) {
    next(error);
  }
});

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

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const reviewId = parseInt(id);

    const review = await service.deleteByPk(reviewId);
    res.json(review);
  } catch (error) {
    next(error);
  }
});

export default router;
