import { createExpressMiddleware } from '@trpc/server/adapters/express';
import express from 'express';
import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';
// ROUTERS
import { router } from './trpc';
import { reposRouter } from './routers/repos';
import { testRouter } from './routers/testRouter';
import { commitsRouter } from './routers/commits';
import { issuesRouter } from './routers/issues';
import { contributorsRouter } from './routers/contributors';
import { langsRouter } from './routers/languages';

dotenv.config();

const port: number = Number(process.env.PORT) || 3001;
const app = express();

const appRouter = router({
    repos: reposRouter,
    tests: testRouter,
    commits: commitsRouter,
    issues: issuesRouter,
    languages: langsRouter,
    contributors: contributorsRouter,
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

mongoose
    .connect(
        process.env.MONGODB_URI as string,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions
    )
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err: Error) => {
        console.log(err);
    });

app.listen(port, function () {
    console.log(`App with tRPC api is listening on port ${port} !`);
});
