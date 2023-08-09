import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import { findAllLanguagesById, addLanguageInfo, updateLanguage, removeLanguage } from '../mongoFunctions';

export const langsRouter = router({
    byId: publicProcedure.input(z.number()).query(async (req) => {
        const lang = await findAllLanguagesById(req.input);
        return lang;
    }),
    update: publicProcedure
        .input(
            z.object({
                repoId: z.number(),
                languages: z.array(
                    z
                        .object({
                            name: z.string(),
                            value: z.number(),
                        })
                        .required()
                ),
            })
        )
        .mutation(async (req) => {
            const response = await updateLanguage(req.input.repoId, req.input.languages);
            return response;
        }),
    add: publicProcedure
        .input(
            z.object({
                repoId: z.number(),
                languages: z.array(
                    z
                        .object({
                            name: z.string(),
                            value: z.number(),
                        })
                        .required()
                ),
            })
        )
        .mutation(async (req) => {
            const response = await addLanguageInfo(req.input);
            return response;
        }),
    delete: publicProcedure.input(z.object({ repoId: z.number() })).mutation(async (req) => {
        const response = await removeLanguage(req.input.repoId);
        return response;
    }),
});
