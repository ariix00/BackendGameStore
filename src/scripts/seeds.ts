import { v4 as generateUUID } from "uuid";
import { db } from "../db/data-source";
import { Console, ConsoleEntity } from "../entities/console";
import { Game, GameEntity } from "../entities/game";
import { GameConsole, GameConsoleEntity } from "../entities/gameConsole";
import { Genre, GenreEntity } from "../entities/genre";
import { Image, ImageEntity } from "../entities/image";
import { ProvinceEntity } from "../entities/province";

export const allSeeds = async () => {
  const baseColumns = {
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  // data
  const provincias = [
    { name: "Sante Fe" },
    { name: "San Luis" },
    { name: "Córdoba" },
    { name: "HOlakeas" },
  ];
  const consoles: Console[] = [
    { name: "PS4", ...baseColumns, id: "28ce39ff-5c77-49fa-8280-44445ab31f47" },
    {
      name: "XBOX ONE",
      ...baseColumns,
      id: "d5215f66-edec-421d-adf4-1803c5839529",
    },
    { name: "NINTENDO SWITCH", ...baseColumns, id: generateUUID() },
  ];
  const games: Game[] = [
    {
      name: "Persona 4",
      description: "el mejor juego de la historia",
      ...baseColumns,
      id: "ec402ccb-be06-4804-bb0a-d71f0821100a",
    },
    {
      name: "Resident evil 4 Remake",
      description: "el verdadero mejor juego de la historia ADA PEAK",
      ...baseColumns,
      id: generateUUID(),
    },
    {
      name: "Pokémon Scarlet",
      description: "aguante gardevoir",
      ...baseColumns,
      id: generateUUID(),
    },
  ];
  const genres: Genre[] = [
    {
      id: generateUUID(),
      name: "Acción",
      ...baseColumns,
    },
    {
      id: generateUUID(),
      name: "Romance",
      ...baseColumns,
    },
    {
      id: generateUUID(),
      name: "Estrategia",
      ...baseColumns,
    },
    {
      id: generateUUID(),
      name: "Anime",
      ...baseColumns,
    },
    {
      id: generateUUID(),
      name: "RPG",
      ...baseColumns,
    },
    {
      id: generateUUID(),
      name: "Cartas",
      ...baseColumns,
    },
    {
      id: generateUUID(),
      name: "Gacha",
      ...baseColumns,
    },
    {
      id: generateUUID(),
      name: "+18",
      ...baseColumns,
    },
    {
      id: generateUUID(),
      name: "Mundo abierto",
      ...baseColumns,
    },
  ];
  const images: Image[] = [
    {
      id: generateUUID(),
      ...baseColumns,
      url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQQ_1H1E8aFaHSLc-Nmm143YT33rBYihVN_pVfshQGE7STz_f-EKjBdVZiIyGnfJBqyY8NXXEpDGG9SNly0-3L4P6h6CyepeWJp66ZJeELQAkqBtemaN8cA",
    },
    {
      id: generateUUID(),
      ...baseColumns,
      url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQhG5CZYoAgoXn-V2MsCz1XHB4F9zQx3Ct97OEVA-CEQ7xVrZrKNqTabUwNOFAD9Vc_I13-rAJk_BtEU4erxcD3bsgFpPBEOFl534GzLuvp2FckR3EPzBw_2w",
    },
    {
      id: generateUUID(),
      ...baseColumns,
      url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrD-w1o8t-t4njMH8Osuq1mqKWj45JbDfCaAcbP1gTgdB_S6OaFyN9kpdKK_XRsqaaj30eaXsc47Rd_EVkp9hMb8AHmnA3wWhjYD1yEbT9q3MEU8LOqkBRBg",
    },
  ];
  const gameConsoles: GameConsole[] = [
    {
      consoleId: "28ce39ff-5c77-49fa-8280-44445ab31f47",
      gameId: "ec402ccb-be06-4804-bb0a-d71f0821100a",
      ...baseColumns,
      id: generateUUID(),
      price: 40000,
      stock: 100,
    },
    {
      consoleId: "d5215f66-edec-421d-adf4-1803c5839529",
      gameId: "ec402ccb-be06-4804-bb0a-d71f0821100a",
      ...baseColumns,
      id: generateUUID(),
      price: 30000,
      stock: 10,
    },
  ];
  //   crear data

  // 1. Provincias
  for (const province of provincias) {
    await db.save(ProvinceEntity, province);
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
  for (const gameConsole of gameConsoles) {
    await db.save(GameConsoleEntity, gameConsole);
  }

  console.log("🌱 Seed insertado correctamente");
};
