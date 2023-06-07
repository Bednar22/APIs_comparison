import express, { Request, Response } from 'express';
import { findAllReleasesById } from '../mongoFunctions';

const router = express.Router();

router.get('/releases/:id', [], async (req: Request, res: Response) => {
    const releases = await findAllReleasesById(req.params.id);
    return res.status(200).send(releases);
});

export { router as releasesRouter };
