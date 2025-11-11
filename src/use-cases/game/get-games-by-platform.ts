import console from "console";
import { Request, Response } from "express";
import z from "zod";
import { db } from "../../db/data-source";
import { ConsoleEntity } from "../../entities/console";
import { GameEntity } from "../../entities/game";
import { ImageEntity } from "../../entities/image";
import { PlatformEntity } from "../../entities/platform";
export const GetGamesByPlatformSchema = z.object({
  query: z.object({
    genresQuery: z.preprocess((input) => {
      if (!input) return undefined;
      return typeof input === "string" ? [input] : input;
    }, z.array(z.string()).optional()),

    pricesQuery: z.preprocess((input) => {
      if (!input) return undefined;
      return typeof input === "string"
        ? [Number(input)]
        : (input as string[]).map(Number);
    }, z.array(z.number()).optional()),

    consoleQuery: z.string("debe ser un string").optional(),
  }),
  params: z.object({
    platform: z.string("debe ser string"),
  }),
});

export type GetGamesByPlatformRequest = z.infer<
  typeof GetGamesByPlatformSchema
>;
export const getGamesByPlatform = async (req: Request, res: Response) => {
  try {
    const { query, params } = req.validatedData as z.infer<
      typeof GetGamesByPlatformSchema
    >;

    const platformQuery = params.platform;
    let genresQuery = query.genresQuery;
    let pricesQuery = query.pricesQuery;
    let consolesQuery = query.consoleQuery;

    console.log("platforms:", platformQuery);
    console.log("genres:", genresQuery);
    console.log("prices:", pricesQuery);
    const platform = await db.findOne(PlatformEntity, {
      where: { name: platformQuery },
    });
    if (!platform) return res.status(400).json({ error: "Platform not found" });
    const consoles = await db.find(ConsoleEntity, {
      where: { platformId: platform.id },
    });
    if (!consoles) return res.status(400).json({ error: "Consoles not found" });

    const gamesbyConsole = await Promise.all(
      consoles.map(async (c) => {
        const query = db
          .getRepository(GameEntity)
          .createQueryBuilder("game")
          .leftJoin("game.gameGenres", "gameGenre")
          .leftJoin("gameGenre.genre", "genre")
          .leftJoin("game.console", "console")
          .where("game.consoleId = :consoleId", { consoleId: c.id });
        if (genresQuery) {
          if (genresQuery.length > 0) {
            genresQuery.forEach((genre) => {
              query.andWhere("genre.name == :genre", { genre });
            });
          } else {
            query.andWhere("1=1");
          }
        } else {
          query.andWhere("1=1");
        }
        if (pricesQuery && pricesQuery[1] != 0 && pricesQuery[0] != 0) {
          query.andWhere("game.price BETWEEN :minPrice AND :maxPrice", {
            minPrice: pricesQuery[0],
            maxPrice: pricesQuery[1],
          });
        }
        if (consolesQuery) {
          query.andWhere("console.name == :consoleName", {
            consoleName: consolesQuery,
          });
        }
        const gameConsole = await query.getMany();
        // const gameConsole = await db.find(GameEntity, {
        //   where: { consoleId: c.id },
        // });

        const games = await Promise.all(
          gameConsole.map(async (gc) => {
            const image = await db
              .getRepository(ImageEntity)
              .createQueryBuilder("image")
              .where("image.gameId = :gameId", { gameId: gc.id })
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
