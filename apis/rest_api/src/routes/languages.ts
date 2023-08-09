import express, { Request, Response } from "express";
import {
  findAllLanguagesById,
  updateLanguage,
  removeLanguage,
  addLanguageInfo,
} from "../mongoFunctions";

const router = express.Router();

router.get("/languages/:id", [], async (req: Request, res: Response) => {
  const response = await findAllLanguagesById(req.params.id);
  return res.status(200).send(response);
});

router.post("/languages/add", [], async (req: Request, res: Response) => {
  const response = await addLanguageInfo(req.body);
  return res.status(200).send(response);
});

router.delete("/languages/:id", [], async (req: Request, res: Response) => {
  const response = await removeLanguage(parseInt(req.params.id));
  return res.status(200).send(response);
});

router.put("/languages/:id", [], async (req: Request, res: Response) => {
  const response = await updateLanguage(
    parseInt(req.params.id),
    req.body.languages
  );
  return res.status(200).send(response);
});

export { router as langsRouter };
