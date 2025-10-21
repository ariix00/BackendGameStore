import { Express } from "express";
import consoleRoutes from "./console.routes";
import gameRoutes from "./game.routes";
import platformRoutes from "./platform.routes";

export const registerRoutes = (app: Express) => {
  app.use("/api", consoleRoutes);
  app.use("/api", gameRoutes);
  app.use("/api", platformRoutes);
};
