import { UUID } from "crypto";
import { v4 as generateUUID } from "uuid";
import { db } from "../db/data-source";
import { Console, ConsoleEntity } from "../entities/console";
import { GameEntity } from "../entities/game";
import { GameGenreEntity } from "../entities/gameGenre";
import { GenreEntity } from "../entities/genre";
import { ImageEntity } from "../entities/image";
import { Platform, PlatformEntity } from "../entities/platform";
import { User, UserEntity } from "../entities/user";
import { PosixDate } from "../time/posix-date";
import { baseColumns } from "../utils/database/baseColumn";
import { createGames, createGenres } from "./generate-game-function";
import {
  arrayGamesNintendoSwitch,
  arrayGamesPS4,
  arrayGamesXboxOne,
  arrayGenres,
} from "./seeds-data";

export const allSeeds = async () => {
  const today = new PosixDate();
  const oneDay = 24 * 60 * 60 * 1000;

  const playStationId = generateUUID() as UUID;
  const xboxId = generateUUID() as UUID;
  const nintendoId = generateUUID() as UUID;
  const genreActionId = generateUUID() as UUID;
  const genreAnimeId = generateUUID() as UUID;
  const genreRPGId = generateUUID() as UUID;

  const persona5Id = generateUUID() as UUID;
  const re4Id = generateUUID() as UUID;
  const shadowOfColossusId = generateUUID() as UUID;
  const minecraftId = generateUUID() as UUID;
  const wwe2k15Id = generateUUID() as UUID;

  const zelda = generateUUID() as UUID;
  const pokemonScarlettId = generateUUID() as UUID;
  const pokemonDiamondId = generateUUID() as UUID;
  const marioKartId = generateUUID() as UUID;

  const gtaVId = generateUUID() as UUID;
  const haloId = generateUUID() as UUID;
  const battleFieldId = generateUUID() as UUID;
  const farCryId = generateUUID() as UUID;

  const consolePs4Id = generateUUID() as UUID;
  const consolePs5Id = generateUUID() as UUID;
  const consoleXboxOneId = generateUUID() as UUID;
  const consoleNintendoSwitchId = generateUUID() as UUID;

  const platforms: Platform[] = [
    {
      id: playStationId,
      name: "PlayStation",
      ...baseColumns,
      url: "https://www.svgrepo.com/show/473754/playstation.svg",
    },
    {
      id: xboxId,
      name: "Xbox",
      ...baseColumns,
      url: "https://www.svgrepo.com/show/473838/xbox.svg",
    },
    {
      id: nintendoId,
      name: "Nintendo",
      ...baseColumns,
      url: "https://www.svgrepo.com/show/342069/nintendo-switch.svg",
    },
  ];
  const consoles: Console[] = [
    {
      name: "PS4",
      ...baseColumns,
      id: consolePs4Id,
      platformId: playStationId,
    },
    {
      name: "PS5",
      ...baseColumns,
      id: consolePs5Id,
      platformId: playStationId,
    },
    {
      name: "XBOX ONE",
      ...baseColumns,
      id: consoleXboxOneId,
      platformId: xboxId,
    },
    {
      name: "NINTENDO SWITCH",
      ...baseColumns,
      id: consoleNintendoSwitchId,
      platformId: nintendoId,
    },
  ];
  const genres = createGenres(arrayGenres);

  const {
    gameGenres: gameGenresPS4,
    gameImages: gameImagesPS4,
    games: gamesPS4,
  } = createGames({
    arrayGames: arrayGamesPS4,
    arrayGenres: genres,
    console: consoles[0],
  });

  const {
    gameGenres: gameGenresXBOXONE,
    gameImages: gameImagesXBOXONE,

    games: gamesXBOXONE,
  } = createGames({
    arrayGames: arrayGamesXboxOne,
    arrayGenres: genres,
    console: consoles[2],
  });
  const {
    gameGenres: gameGenresNINTENDOSWITCH,
    gameImages: gameImagesNINTENDOSWITCH,

    games: gamesNINTENDOSWITCH,
  } = createGames({
    arrayGames: arrayGamesNintendoSwitch,
    arrayGenres: genres,
    console: consoles[3],
  });

  const users: User[] = [
    {
      id: generateUUID() as UUID,
      name: "Pedro",
      lastName: "Ferraioli",
      password: "aguanteGardevoir",
      email: "futanarilover11037@gmail.com",
      ...baseColumns,
    },
  ];

  for (const platform of platforms) {
    await db.save(PlatformEntity, platform);
  }
  console.log("1");

  for (const console of consoles) {
    await db.save(ConsoleEntity, console);
  }
  console.log("2");

  for (const game of gamesPS4) {
    await db.save(GameEntity, game);
  }
  console.log("13");

  for (const game of gamesXBOXONE) {
    await db.save(GameEntity, game);
  }
  console.log("13");

  for (const game of gamesNINTENDOSWITCH) {
    await db.save(GameEntity, game);
  }
  console.log("13");

  for (const genre of genres) {
    await db.save(GenreEntity, genre);
  }
  console.log("14");

  for (const gameImage of gameImagesPS4) {
    await db.save(ImageEntity, gameImage);
  }
  console.log("15");

  for (const gameImage of gameImagesXBOXONE) {
    await db.save(ImageEntity, gameImage);
  }
  console.log("15");

  for (const gameImage of gameImagesNINTENDOSWITCH) {
    await db.save(ImageEntity, gameImage);
  }
  console.log("15");

  for (const gameGenre of gameGenresPS4) {
    await db.save(GameGenreEntity, gameGenre);
  }
  console.log("16");

  for (const gameGenre of gameGenresNINTENDOSWITCH) {
    await db.save(GameGenreEntity, gameGenre);
  }
  console.log("16");

  for (const gameGenre of gameGenresXBOXONE) {
    await db.save(GameGenreEntity, gameGenre);
  }
  console.log("16");
  for (const user of users) {
    await db.save(UserEntity, user);
  }
  console.log("17");

  console.log("🌱 Seed insertado correctamente");
};
