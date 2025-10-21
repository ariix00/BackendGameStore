import { Request, Response } from "express";
import { db } from "../db/data-source";
import { PlatformEntity } from "../entities/platform";

export const getPlatforms = async (req: Request, res: Response) => {
  const platforms = await db.find(PlatformEntity);

  const platformData = platforms.map((platform) => {
    return {
      name: platform.name,
      url: platform.url,
    };
  });
  res.json(platformData);
};
