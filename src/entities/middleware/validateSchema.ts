import { NextFunction, Request, Response } from "express";
import { ZodError, ZodObject, ZodRawShape, infer as zInfer } from "zod";

const formatZodErrors = (error: ZodError) => {
  const formatted: Record<string, string[]> = {};
  for (const issue of error.issues) {
    const path = issue.path.join(".") || "form";
    if (!formatted[path]) formatted[path] = [];
    formatted[path].push(issue.message);
  }
  return formatted;
};

export const validateSchema =
  <T extends ZodObject<ZodRawShape>>(schema: T) =>
  (req: Request, res: Response, next: NextFunction): void | Response => {
    const parsed = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    if (!parsed.success) {
      return res.status(400).json({
        message: "Datos inválidos",
        errors: formatZodErrors(parsed.error),
      });
    }

    // @ts-ignore — Extendemos el tipo de Request
    req.validatedData = parsed.data as zInfer<T>;
    next();
  };
