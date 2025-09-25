import { Request, Response } from "express";
import { db } from "../db/data-source";
import { ProvinceEntity } from "../entities/province";

export const getAllProvinces = async (req: Request, res: Response) => {
  const provinces = await db.find(ProvinceEntity);
  res.json(provinces);
};

export const createProvince = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const newProvince = db.create(ProvinceEntity, { name });
    await db.save(ProvinceEntity, newProvince);
    res.status(201).json(newProvince);
  } catch (err) {
    res.status(400).json({ error: "Province could not be created" });
  }
};
