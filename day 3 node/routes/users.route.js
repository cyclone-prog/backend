import express from "express";
import {
  createUser,
  deleteUser,
  updateUser,
} from "../controller/users.controller";

const router = express.Router();

//CRUD (read)
router.get("/new", getUsers);

// CRUD (create)
router.post("/", createUser);

// CRUD (update)
router.patch("./:id", updateUser);

// CRUD (delete)
router.delete("./:id", deleteUser);

export default router;
