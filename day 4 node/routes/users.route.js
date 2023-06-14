import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/users.controller.js";

const router = express.Router();

const users = ["ram", "laxman", "bharat"];
//CRUD (read)
router.get("/", getUsers);
// CRUD (create)
router.post("/", createUser);
// CRUD (update)
router.patch("/:id", updateUser);
// CRUD (delete)
router.delete("/:id", deleteUser);
export default router;
