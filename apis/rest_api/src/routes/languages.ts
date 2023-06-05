import express, { Request, Response } from 'express';
import { findAllLanguagesById } from '../mongoFunctions';

const router = express.Router();

router.get('/languages/:id', [], async (req: Request, res: Response) => {
    const langs = await findAllLanguagesById(req.params.id);
    return res.status(200).send(langs);
});

export { router as langsRouter };
