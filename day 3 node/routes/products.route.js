import express from "express";
const router = express.Router(); 

//CRUD (read)
router.get("/", (req, res) => {
  const products = ["apple", "banana", "mango"];

  res.status(200).json({
    status: true,
    data: products,
    message: "products route",
  });
});
//CRUD (create)
 
export default router;
