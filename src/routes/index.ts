import { Express } from "express";
import consoleRoutes from "./console.routes";

export const registerRoutes = (app: Express) => {
  app.use("/api", consoleRoutes);
};
