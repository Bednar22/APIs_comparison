import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import { findAllReleasesById } from '../mongoFunctions';

export const releasesRouter = router({
    byId: publicProcedure.input(z.number()).query(async (req) => {
        const releases = await findAllReleasesById(req.input);
        return releases;
    }),
});
