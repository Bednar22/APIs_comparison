import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import { findAllCommitsById } from '../mongoFunctions';

export const commitsRouter = router({
    byId: publicProcedure.input(z.number()).query(async (req) => {
        const commits = await findAllCommitsById(req.input);
        return commits;
    }),
});
