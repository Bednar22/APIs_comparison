import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import { findAllIssuesById } from '../mongoFunctions';

export const issuesRouter = router({
    byId: publicProcedure.input(z.number()).query(async (req) => {
        const issues = await findAllIssuesById(req.input);
        return issues;
    }),
});
