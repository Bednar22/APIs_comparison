import express, { Request, Response } from 'express';
import { findAllContributorsById } from '../mongoFunctions';

const router = express.Router();

router.get('/contributors/:id', [], async (req: Request, res: Response) => {
    const contributors = await findAllContributorsById(req.params.id);
    return res.status(200).send(contributors);
});

export { router as contributorsRouter };
