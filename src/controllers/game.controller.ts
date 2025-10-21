import { UUID } from "crypto";
import { Request, Response } from "express";
import { db } from "../db/data-source";
import { ConsoleEntity } from "../entities/console";
import { GameEntity } from "../entities/game";
import { GameGenreEntity } from "../entities/gameGenre";
import { GameImageEntity } from "../entities/gameImage";
import { ImageEntity } from "../entities/image";
import { PlatformEntity } from "../entities/platform";

export const getLatestGameData = async (req: Request, res: Response) => {
  const latestGame = await db.findOne(GameEntity, {
    where: {},
    order: { createdAt: "DESC" },
  });
  if (!latestGame)
    return res.status(400).json({ error: "game could not be found" });

  const images = await db.find(GameImageEntity, {
    where: { gameId: latestGame.id },
    relations: ["image"],
  });
  const newImages = images.map((image) => {
    return { url: image.image.url, type: image.image.type };
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
        .leftJoin("image.gameImages", "gameImage")
        .where("gameImage.gameId = :gameId", { gameId: gc.id })
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

export const getGamesByPlatform = async (req: Request, res: Response) => {
  try {
    const platformQuery = req.query.platformQuery as string;
    console.log(platformQuery);

    const platform = await db.findOne(PlatformEntity, {
      where: { name: platformQuery },
    });
    console.log(platform);
    if (!platform) return res.status(400).json({ error: "Platform not found" });
    console.log(platform.id);
    const consoles = await db.find(ConsoleEntity, {
      where: { platformId: platform.id },
    });
    console.log(consoles);
    if (!consoles) return res.status(400).json({ error: "Consoles not found" });

    const gamesbyConsole = await Promise.all(
      consoles.map(async (c) => {
        const gameConsole = await db.find(GameEntity, {
          where: { consoleId: c.id },
        });
        const games = await Promise.all(
          gameConsole.map(async (gc) => {
            const image = await db
              .getRepository(ImageEntity)
              .createQueryBuilder("image")
              .leftJoin("image.gameImages", "gameImage")
              .where("gameImage.gameId = :gameId", { gameId: gc.id })
              .andWhere("image.type = :type", { type: "primary" })
              .getOne();

            return {
              name: gc.name,
              description: gc.description,
              price: gc.price,
              imageUrl: image?.url,
              id: gc.id,
            };
          })
        );
        return {
          consoleId: c.id,
          consoleName: c.name,
          games,
        };
      })
    );
    console.log(gamesbyConsole);
    res.json(gamesbyConsole);
  } catch (error) {
    console.error(error);
  }
};
export const getGameById = async (req: Request, res: Response) => {
  const idQuery = req.params.id as UUID;
  try {
    const game = await db.findOne(GameEntity, {
      where: { id: idQuery },
    });
    if (!game)
      return res.status(400).json({ error: "game could not be found" });

    const images = await db.find(GameImageEntity, {
      where: { gameId: game.id },
      relations: ["image"],
    });
    const gameImages = images.map((image) => {
      return { url: image.image.url, type: image.image.type };
    });
    const genres = await db.find(GameGenreEntity, {
      where: {
        gameId: game.id,
      },
      relations: ["genre"],
    });
    const gameGenres = genres.map((genre) => {
      return genre.genre.name;
    });
    const data = {
      id: game.id,
      name: game.name,
      description: game.description,
      images: gameImages,
      price: game.price,
      genres: gameGenres,
    };
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
