import express from "express";
import {
  getProducts,
  postProducts,
} from "../controller/products.controller.js";
const router = express.Router();

//CRUD (read)
router.get("/", getProducts);
router.post("/", postProducts);
export default router;
