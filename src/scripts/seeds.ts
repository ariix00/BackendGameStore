import { UUID } from "crypto";
import { v4 as generateUUID } from "uuid";
import { db } from "../db/data-source";
import { Console, ConsoleEntity } from "../entities/console";
import { Game, GameEntity } from "../entities/game";
import { GameGenre, GameGenreEntity } from "../entities/gameGenre";
import { GameImage, GameImageEntity } from "../entities/gameImage";
import { Genre, GenreEntity } from "../entities/genre";
import { Image, ImageEntity, ImageType } from "../entities/image";
import { Platform, PlatformEntity } from "../entities/platform";
import { User, UserEntity } from "../entities/user";
import { PosixDate } from "../time/posix-date";

export const allSeeds = async () => {
  const today = new PosixDate(); // fecha actual
  const oneDay = 24 * 60 * 60 * 1000; // milisegundos en un día

  const baseColumns = {
    createdAt: new PosixDate(),
    updatedAt: new PosixDate(),
  };
  // data
  const playStationId = generateUUID() as UUID;
  const xboxId = generateUUID() as UUID;
  const nintendoId = generateUUID() as UUID;
  const genreActionId = generateUUID() as UUID;
  const genreAnimeId = generateUUID() as UUID;
  const genreRPGId = generateUUID() as UUID;
  const persona5Id = generateUUID() as UUID;
  const re4Id = generateUUID() as UUID;
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
  const games: Game[] = [
    {
      name: "Pokémon Scarlet",
      description: "aguante gardevoir",
      ...baseColumns,
      id: "14d8aa18-70a4-46e6-9cc4-9c13b4f92a56",
      consoleId: consoleNintendoSwitchId,
      price: 30000,
      stock: 27,
    },
    {
      name: "Resident evil 4 Remake",
      description: "el verdadero mejor juego de la historia ADA PEAK",
      ...baseColumns,
      id: re4Id,
      consoleId: consolePs4Id,
      price: 40000,
      stock: 50,
    },
    {
      name: "Persona 5",
      description:
        "Vive la doble vida de un estudiante y un justiciero enmascarado. Explora Tokio, forja lazos y roba los corazones corruptos en esta inolvidable aventura JRPG.",
      ...baseColumns,
      createdAt: new PosixDate(today.timestamp + oneDay),
      id: persona5Id,
      consoleId: consolePs4Id,
      price: 40000,
      stock: 5,
    },
  ];
  const genres: Genre[] = [
    {
      id: genreActionId,
      name: "Acción",
      ...baseColumns,
    },
    {
      id: generateUUID() as UUID,
      name: "Romance",
      ...baseColumns,
    },
    {
      id: generateUUID() as UUID,
      name: "Estrategia",
      ...baseColumns,
    },
    {
      id: genreAnimeId,
      name: "Anime",
      ...baseColumns,
    },
    {
      id: genreRPGId,
      name: "RPG",
      ...baseColumns,
    },
    {
      id: generateUUID() as UUID,
      name: "Cartas",
      ...baseColumns,
    },
    {
      id: generateUUID() as UUID,
      name: "Gacha",
      ...baseColumns,
    },
    {
      id: generateUUID() as UUID,
      name: "+18",
      ...baseColumns,
    },
    {
      id: generateUUID() as UUID,
      name: "Mundo abierto",
      ...baseColumns,
    },
  ];
  const images: Image[] = [
    {
      id: "846ba770-cba3-491a-a443-0e5cc9fe0c2a",
      ...baseColumns,
      url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQQ_1H1E8aFaHSLc-Nmm143YT33rBYihVN_pVfshQGE7STz_f-EKjBdVZiIyGnfJBqyY8NXXEpDGG9SNly0-3L4P6h6CyepeWJp66ZJeELQAkqBtemaN8cA",
      type: ImageType.PRIMARY,
    },
    {
      id: generateUUID() as UUID,
      ...baseColumns,
      url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQhG5CZYoAgoXn-V2MsCz1XHB4F9zQx3Ct97OEVA-CEQ7xVrZrKNqTabUwNOFAD9Vc_I13-rAJk_BtEU4erxcD3bsgFpPBEOFl534GzLuvp2FckR3EPzBw_2w",
      type: ImageType.PRIMARY,
    },
    {
      id: "d2893ccd-7353-4419-b49d-0d68e70cd50e",
      ...baseColumns,
      url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrD-w1o8t-t4njMH8Osuq1mqKWj45JbDfCaAcbP1gTgdB_S6OaFyN9kpdKK_XRsqaaj30eaXsc47Rd_EVkp9hMb8AHmnA3wWhjYD1yEbT9q3MEU8LOqkBRBg",
      type: ImageType.PRIMARY,
    },
    {
      id: "cf4cc026-d39b-489c-9c5e-e1a13d21f417",
      ...baseColumns,
      url: "https://pbs.twimg.com/media/C1lczSnXgAAvoCY.jpg",
      type: ImageType.SECONDARY,
    },
    {
      id: "b9a886e2-df66-400f-9f4b-ae31de2c9ca5",
      ...baseColumns,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Persona_5_logo.svg/1200px-Persona_5_logo.svg.png",
      type: ImageType.TITLE,
    },
  ];

  const gameGenres: GameGenre[] = [
    {
      genreId: genreActionId,
      gameId: re4Id,
      id: generateUUID() as UUID,
      ...baseColumns,
    },
    {
      genreId: genreActionId,
      gameId: persona5Id,
      id: generateUUID() as UUID,
      ...baseColumns,
    },
    {
      genreId: genreAnimeId,
      gameId: persona5Id,
      id: generateUUID() as UUID,
      ...baseColumns,
    },
    {
      genreId: genreRPGId,
      gameId: persona5Id,
      id: generateUUID() as UUID,
      ...baseColumns,
    },
  ];
  const gameImages: GameImage[] = [
    {
      imageId: "846ba770-cba3-491a-a443-0e5cc9fe0c2a",
      gameId: persona5Id,
      id: generateUUID() as UUID,
      ...baseColumns,
    },
    {
      imageId: "cf4cc026-d39b-489c-9c5e-e1a13d21f417",
      gameId: persona5Id,
      id: generateUUID() as UUID,
      ...baseColumns,
    },
    {
      imageId: "b9a886e2-df66-400f-9f4b-ae31de2c9ca5",
      gameId: persona5Id,
      id: generateUUID() as UUID,
      ...baseColumns,
    },
    {
      imageId: "d2893ccd-7353-4419-b49d-0d68e70cd50e",
      gameId: "14d8aa18-70a4-46e6-9cc4-9c13b4f92a56",
      id: generateUUID() as UUID,
      ...baseColumns,
    },
  ];
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

  //   crear data

  // 1. Provincias
  for (const platform of platforms) {
    await db.save(PlatformEntity, platform);
  }
  // 2. Consolas
  for (const console of consoles) {
    await db.save(ConsoleEntity, console);
  }

  // 3. Juegos
  for (const game of games) {
    await db.save(GameEntity, game);
  }

  // 4. Géneros
  for (const genre of genres) {
    await db.save(GenreEntity, genre);
  }

  // 5. Imágenes
  for (const image of images) {
    await db.save(ImageEntity, image);
  }

  // ⚡️ Ahora sí: 6. GameConsoles (que dependen de consoles + games)

  for (const gameGenre of gameGenres) {
    await db.save(GameGenreEntity, gameGenre);
  }
  for (const gameImage of gameImages) {
    await db.save(GameImageEntity, gameImage);
  }
  for (const user of users) {
    await db.save(UserEntity, user);
  }

  console.log("🌱 Seed insertado correctamente");
};
