import express from "express";
import "reflect-metadata";
import { initializeDB } from "./db/data-source"; // ✅ IMPORT CORRECTO
import { allSeeds } from "./scripts/seeds";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

initializeDB().then(async () => {
  await allSeeds();
  app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
  });
});
