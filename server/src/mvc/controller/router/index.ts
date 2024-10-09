import { Express, Router } from "express";

import accountRouter from "./account.router";
// import productRouter from "./product.router";
// import userRouter from "./user.router";
// import marketRouter from "./market.router";
// import categoryRouter from "./category.router";
// import orderRouter from "./order.router";

// import authRouter from "./auth.router";
// import profileRouter from "./profile.router";

function routerAPI(app: Express) {
  const router = Router();

  app.use("/api/v1", router);

  router.use("/accounts", accountRouter);
  // router.use("/products", productRouter);
  // router.use("/users", userRouter);
  // router.use("/markets", marketRouter);
  // router.use("/category", categoryRouter);
  // router.use("/order", orderRouter);

  // router.use("/auth", authRouter);
  // router.use("/profile", profileRouter);
}

export { routerAPI };
