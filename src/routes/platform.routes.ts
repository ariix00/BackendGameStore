import { Router } from "express";
import { getPlatforms } from "../use-cases";
import { getPlatformNames } from "../use-cases/platform/get-platform-names";

const router = Router();

router.get("/getPlatforms", getPlatforms);
router.get("/getPlatformNames", getPlatformNames);

export default router;
