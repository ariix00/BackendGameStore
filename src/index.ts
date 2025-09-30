import cors from "cors";
import express from "express";
import "reflect-metadata";
import { initializeDB } from "./db/data-source"; // ✅ IMPORT CORRECTO
import { registerRoutes } from "./routes";
import { allSeeds } from "./scripts/seeds";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

initializeDB().then(async () => {
  await allSeeds();
  registerRoutes(app);
  app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
  });
});
