import { UUID } from "crypto";
import { Request, Response } from "express";
import { db } from "../../db/data-source";
import { GameEntity } from "../../entities/game";
import { GameGenreEntity } from "../../entities/gameGenre";
import { ImageEntity, ImageType } from "../../entities/image";
export interface GetGameByIdResponse {
  id: UUID;
  name: string;
  description: string;
  images: { url: string; type: ImageType };
  price: number;
  stock: number;
}

export const getGameById = async (req: Request, res: Response) => {
  const idQuery = req.params.id as UUID;
  try {
    const game = await db.findOne(GameEntity, {
      where: { id: idQuery },
    });
    if (!game)
      return res.status(400).json({ error: "game could not be found" });

    const images = await db.find(ImageEntity, {
      where: { gameId: game.id },
    });
    const gameImages = images.map((image) => {
      return { url: image.url, type: image.type };
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
      stock: game.stock,
    };
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
