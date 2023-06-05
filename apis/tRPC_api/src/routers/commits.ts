import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import { CommitI } from '../types';
import { findAllCommitsById } from '../mongoFunctions';

export const commitsRouter = router({
    byId: publicProcedure.input(z.string()).query(async (req) => {
        const commits = await findAllCommitsById(req.input);
        return commits;
    }),
});
