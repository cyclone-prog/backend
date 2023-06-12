import express from "express";
const router = express.Router();

const users = ["ram", "laxman", "bharat"];

router.get("/", (req, res) => {
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
// CRUD (create)
router.post("/", (req, res) => {
  const { name } = req.body;
  users.push(name);
  res.status(200).json({
    status: true,
    users,
    message: "users successfully created",
  });
});
// CRUD (update)
router.patch("./:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  users[id] = name;
  res.status(200).json({
    status: true,
    users,
    message: "users updated successfully",
  });
});
// CRUD (delete)
router.delete("./:id", (req, res) => {
  const { id } = req.params;
  delete users[id];
  res.status(200).json({
    status: true,
    users,
    message: "user deleted successfully",
  });
});
export default router;
