import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import { ReleaseI } from '../types';
import { findAllReleasesById } from '../mongoFunctions';

export const releasesRouter = router({
    byId: publicProcedure.input(z.string()).query(async (req) => {
        const releases = await findAllReleasesById(req.input);
        return releases;
    }),
});
