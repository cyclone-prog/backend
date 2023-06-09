import express from "express";
import userRouter from "./users.route.js";
import productsRouter from "./products.route.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(201).json({
    status: true,
    message: "user is here",
  });
});
router.use("/user", userRouter);
router.use("/products", productsRouter);

export default router;
