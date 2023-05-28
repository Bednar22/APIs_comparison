import express, { Request, Response } from 'express';
import { Repos } from '../models/repos';

const router = express.Router();

router.get('/repos', [], async (req: Request, res: Response) => {
    const repos = await Repos.find({});
    return res.status(200).send(repos);
});

router.get('/repos/:id', [], async (req: Request, res: Response) => {
    const repo = await Repos.findById(req.params.id);
    return res.status(200).send(repo);
});

export { router as reposRouter };
