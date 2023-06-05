import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import { LanguageI } from '../types';
import { findAllLanguagesById } from '../mongoFunctions';

export const langsRouter = router({
    byId: publicProcedure.input(z.string()).query(async (req) => {
        const lang = await findAllLanguagesById(req.input);
        return lang;
    }),
});
