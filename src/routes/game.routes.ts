import { Router } from "express";
import {
  getGameById,
  getGamesByPlatform,
  getLatestGameData,
} from "../controllers/game.controller";
import { getGenres } from "../controllers/genre.controller";

const router = Router();

router.get("/getLatestGame", getLatestGameData);
router.get("/getGamesByPlatform", getGamesByPlatform);
router.get("/getGameById/:id", getGameById);
router.get("/getGenres", getGenres);

export default router;
