import express, { Request, Response } from 'express';
import { findAllIssuesById } from '../mongoFunctions';

const router = express.Router();

router.get('/issues/:id', [], async (req: Request, res: Response) => {
    const issues = await findAllIssuesById(req.params.id);
    return res.status(200).send(issues);
});

export { router as issuesRouter };
