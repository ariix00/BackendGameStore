import { Request, Response } from "express";
import { db } from "../../db/data-source";
import { GameEntity } from "../../entities/game";
import { ImageEntity } from "../../entities/image";

export const getLatestGameData = async (req: Request, res: Response) => {
  const latestGame = await db.findOne(GameEntity, {
    where: {},
    order: { createdAt: "DESC" },
  });
  if (!latestGame)
    return res.status(400).json({ error: "game could not be found" });

  const images = await db.find(ImageEntity, {
    where: { gameId: latestGame.id },
  });
  const newImages = images.map((image) => {
    return { url: image.url, type: image.type };
  });
  const data1 = {
    id: latestGame.id,
    name: latestGame.name,
    description: latestGame.description,
    images: newImages,
  };

  const latestGames = await db.find(GameEntity, {
    where: {},
    order: { createdAt: "DESC" },
    take: 5,
  });
  if (!latestGames)
    return res.status(400).json({ error: "games could not be found" });
  const data2 = await Promise.all(
    latestGames.map(async (gc) => {
      const image = await db
        .getRepository(ImageEntity)
        .createQueryBuilder("image")
        .where("image.gameId = :gameId", { gameId: gc.id })
        .andWhere("image.type = :type", { type: "primary" })
        .getOne();

      return {
        name: gc.name,
        price: gc.price,
        imageUrl: image?.url,
        id: gc.id,
      };
    })
  );

  const data = {
    latestGame: data1,
    latestGames: data2,
  };

  res.json(data);
};
