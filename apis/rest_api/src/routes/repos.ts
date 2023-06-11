import express, { Request, Response } from 'express';
import { Repo } from '../models/repos';
import { findAllRepos, findRepoById } from '../mongoFunctions';

const router = express.Router();

router.get('/repos', [], async (req: Request, res: Response) => {
    const repos = await findAllRepos();
    return res.status(200).send(repos);
});

router.get('/repos/:id', [], async (req: Request, res: Response) => {
    const repo = await findRepoById(req.params.id);
    return res.status(200).send(repo);
});

export { router as reposRouter };
