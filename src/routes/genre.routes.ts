import { Router } from "express";
import { getGenres } from "../use-cases";

const router = Router();

router.get("/getGenres", getGenres);

export default router;
