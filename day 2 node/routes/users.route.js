import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const users = ["ram", "laxman", "bharat"];
  res.status(200).json({
    status: true,
    data: users,
    message: "users added ",
  });
});
router.get("/new", (req, res) => {
  const users = ["ram", "laxman", "bharat"];
  users.push("syam");
  res.status(200).json({
    status: true,
    data: users,
    message: "users added ",
  });
});
export default router;
