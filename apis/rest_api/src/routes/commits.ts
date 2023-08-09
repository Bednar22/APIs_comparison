import express, { Request, Response } from 'express';
import { findAllCommitsById } from '../mongoFunctions';

const router = express.Router();

router.get('/commits/:id', [], async (req: Request, res: Response) => {
    const commits = await findAllCommitsById(req.params.id);
    return res.status(200).send(commits);
});

export { router as commitsRouter };
