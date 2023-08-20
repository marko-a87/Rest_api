import express from "express";
import {
  createUsers,
  getUsers,
  deleteUsers,
  updateUsers,
} from "../controllers/userControllers.js";
const router = express.Router();

router.get("/", getUsers);
router.post("/create", createUsers);
router.put("/update/:id", updateUsers);
router.delete("/delete/:id", deleteUsers);

export default router;
