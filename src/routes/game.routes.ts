import { Router } from "express";
import { validateSchema } from "../entities/middleware/validateSchema";
import {
  getGameById,
  getGamesByPlatform,
  GetGamesByPlatformSchema,
  getLatestGameData,
} from "../use-cases";

const router = Router();

router.get("/getLatestGame", getLatestGameData);
router.get(
  "/getGamesByPlatform/:platform",
  validateSchema(GetGamesByPlatformSchema),
  getGamesByPlatform
);
router.get("/getGameById/:id", getGameById);

export default router;
