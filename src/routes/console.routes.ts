import { Router } from "express";
import {
  createConsole,
  deleteConsole,
  getAllConsoles,
  updateConsole,
} from "../controllers/console.controller";

const router = Router();

router.get("/", getAllConsoles);
router.post("/create", createConsole);
router.post("/update/:id", updateConsole);
router.post("/delete/:id", deleteConsole);

export default router;
