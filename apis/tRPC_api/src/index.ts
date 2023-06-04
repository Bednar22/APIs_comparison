import { createExpressMiddleware } from '@trpc/server/adapters/express';
import express from 'express';
import { router } from './trpc';
import { usersRouter } from './routers/repos';
import { publicProcedure } from './trpc';

const app = express();

const appRouter = router({
    greeting: publicProcedure.query((requestObj) => {
        console.log(requestObj);
        return `Hello pies`;
    }),
    users: usersRouter,
});
export type AppRouter = typeof appRouter;

app.use(
    '/trpc',
    createExpressMiddleware({
        router: appRouter,
        createContext: ({ req, res }) => {
            return {};
        },
    })
);
app.listen(5001);
