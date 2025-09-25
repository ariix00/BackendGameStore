import { AppDataSource } from "./ormconfig";

export const initializeDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log("✅ DB initialized");
  } catch (err) {
    console.error("❌ Failed to initialize DB", err);
    process.exit(1);
  }
};

export const db = AppDataSource.manager;
