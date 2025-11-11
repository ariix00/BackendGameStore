import { UUID } from "crypto";
import { Request, Response } from "express";
import { v4 as generateUUID } from "uuid";
import { db } from "../../db/data-source";
import { Console, ConsoleEntity } from "../../entities/console";
import { PosixDate } from "../../time/posix-date";

export const getAllConsoles = async (req: Request, res: Response) => {
  const consoles = await db.find(ConsoleEntity);
  res.json(consoles);
};

export const createConsole = async (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400).json({ error: "ha ocurrido un error inesperado" });
    return;
  }
  const { name } = req.body;

  const findConsole = await db.findOne(ConsoleEntity, {
    where: { name: name },
  });
  if (findConsole) {
    res.status(400).json({ error: "Esta Consola ya existe pa" });
    return;
  }

  try {
    const newConsole: Console = {
      name: name,
      createdAt: new PosixDate(),
      updatedAt: new PosixDate(),
      id: generateUUID() as UUID,
      platformId: generateUUID() as UUID,
    };
    console.log(newConsole);
    await db.save(ConsoleEntity, newConsole);
    res.status(200).json({ message: "La consola ha sido creada con éxito" });
  } catch (err) {
    res.status(400).json({ error: "Console could not be created" });
  }
};

export const updateConsole = async (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400).json({ error: "ha ocurrido un error inesperado" });
    return;
  }
  const { name } = req.body;
  const id = req.params.id as UUID;

  try {
    const findConsole = await db.findOne(ConsoleEntity, { where: { id: id } });
    if (findConsole) {
      await db.update(
        ConsoleEntity,
        { id: id },
        { name: name, updatedAt: new PosixDate() }
      );
      res.status(200).json({ message: "Console successfully updated! :3" });
    } else {
      res.status(400).json({ error: "Console could not be found" });
    }
  } catch (err) {
    res.status(400).json({ error: "Console could not be updated" });
  }
};

export const deleteConsole = async (req: Request, res: Response) => {
  const id = req.params.id as UUID;
  try {
    const findConsole = await db.findOne(ConsoleEntity, {
      where: { id: id },
    });
    if (findConsole) {
      console.log(findConsole);
      await db.delete(ConsoleEntity, { id: id });

      res.status(200).json({ message: "Console successfully deleted! :3" });
    } else {
      res.status(400).json({ error: "Console no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Console could not be deleted" });
  }
};
