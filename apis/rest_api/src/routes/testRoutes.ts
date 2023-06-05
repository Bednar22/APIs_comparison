import express, { Request, Response } from 'express';
import {
    addObject,
    findAllCommitsById,
    findAllContributorsById,
    findAllIssuesById,
    findAllLanguagesById,
} from '../mongoFunctions';

const router = express.Router();

router.post('/addTest', [], async (req: Request, res: Response) => {
    const status = await addObject(req.body);
    if (status === -1) {
        res.status(400).json({ message: 'POST request error' });
    } else {
        res.status(200).json({ message: 'POST request successful' });
    }
});

router.get('/getAllAboutRepo/:id', [], async (req: Request, res: Response) => {
    const issues = await findAllIssuesById(req.params.id);
    const commits = await findAllCommitsById(req.params.id);
    const contributors = await findAllContributorsById(req.params.id);
    const languages = await findAllLanguagesById(req.params.id);
    const allInfo = { ...issues, ...commits, ...contributors, ...languages };
    return res.status(200).send(allInfo);
});

export { router as testRouter };
