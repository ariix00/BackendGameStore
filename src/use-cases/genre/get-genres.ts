import { Request, Response } from "express";
import { db } from "../../db/data-source";
import { GenreEntity } from "../../entities/genre";

export const getGenres = async (req: Request, res: Response) => {
  const genresData = await db.find(GenreEntity, { where: {} });
  const genres = genresData.map((genre) => {
    return {
      name: genre.name,
    };
  });
  res.json(genres);
};
