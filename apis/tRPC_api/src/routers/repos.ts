import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import { RepoI } from '../types';
import { findAllRepos, findRepoById } from '../mongoFunctions';

export const reposRouter = router({
    all: publicProcedure.query(async (req) => {
        const repos: RepoI[] = await findAllRepos();
        return repos;
    }),
    byId: publicProcedure.input(z.number()).query(async (req) => {
        const repo: RepoI | null = await findRepoById(req.input);
        return repo;
    }),
});
