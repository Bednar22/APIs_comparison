import express, { Request, Response } from 'express';
import { addObject } from '../mongoFunctions';

const router = express.Router();

router.post('/addTest', [], async (req: Request, res: Response) => {
    const status = await addObject(req.body);
    if (status === -1) {
        res.status(400).json({ message: 'POST request error' });
    } else {
        res.status(200).json({ message: 'POST request successful' });
    }
});

export { router as testRouter };
