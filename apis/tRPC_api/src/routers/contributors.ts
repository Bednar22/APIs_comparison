import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import { findAllContributorsById } from '../mongoFunctions';

export const contributorsRouter = router({
    byId: publicProcedure.input(z.number()).query(async (req) => {
        const contributors = await findAllContributorsById(req.input);
        return contributors;
    }),
});
