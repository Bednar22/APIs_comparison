import express, { Request, Response } from 'express';
import { Repo } from '../models/repos';
import {
    findAllRepos,
    findRepoById,
    findAllCommitsById,
    findAllContributorsById,
    findAllIssuesById,
    findAllReleasesById,
    findAllLanguagesById,
} from '../mongoFunctions';

const router = express.Router();

router.get('/repos', [], async (req: Request, res: Response) => {
    const repos = await findAllRepos();
    return res.status(200).send(repos);
});

router.get('/repos/:id', [], async (req: Request, res: Response) => {
    const repo = await findRepoById(req.params.id);
    return res.status(200).send(repo);
});

router.get('/repos/allinfo/:id', [], async (req: Request, res: Response) => {
    const langs = await findAllLanguagesById(req.params.id);
    const issue = await findAllIssuesById(req.params.id);
    const contrib = await findAllContributorsById(req.params.id);
    const releases = await findAllReleasesById(req.params.id);
    const commits = await findAllCommitsById(req.params.id);
    const response = { ...langs, ...issue, ...contrib, ...releases, ...commits };
    return res.status(200).send(response);
});

export { router as reposRouter };
