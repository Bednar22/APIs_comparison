import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import { addObject } from '../mongoFunctions';

export const testRouter = router({
    add: publicProcedure
        .input(
            z.object({
                id: z.number(),
                field1: z.string(),
                field2: z.string(),
                field3: z.string(),
                field4: z.string(),
                field5: z.string(),
                field6: z.string(),
                field7: z.string(),
                field8: z.string(),
                field9: z.string(),
            })
        )
        .mutation(async (req) => {
            const status = await addObject(req.input);
            if (status === -1) {
                return 'POST request error';
            } else {
                return 'POST request successful';
            }
        }),
});
