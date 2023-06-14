import express from "express";
import userRouter from "./users.route.js";
import productsRouter from "./products.route.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productsRouter);

export default router;
