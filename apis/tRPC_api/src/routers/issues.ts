import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import { IssueI } from '../types';
import { findAllIssuesById } from '../mongoFunctions';

export const issuesRouter = router({
    byId: publicProcedure.input(z.string()).query(async (req) => {
        const issues = await findAllIssuesById(req.input);
        return issues;
    }),
});
