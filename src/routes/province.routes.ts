import { Router } from "express";
import {
  getAllProvinces,
  createProvince,
} from "../controllers/province.controller";

const router = Router();

router.get("/", getAllProvinces);
router.post("/", createProvince);

export default router;
