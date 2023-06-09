import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const products = ["apple", "banana", "mango"];

  res.status(200).json({
    status: true,
    data: products,
    message: "products route",
  });
});
router.get("/new", (req, res) => {
  const products = ["apple", "banana", "mango"];
  products.push("pineapple");
  res.status(201).json({
    status: true,
    data: products,
    message: "products created",
  });
});
export default router;
