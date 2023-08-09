import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import { RepoI } from '../types';
import {
    findAllRepos,
    findRepoById,
    findAllCommitsById,
    findAllContributorsById,
    findAllIssuesById,
    findAllReleasesById,
    findAllLanguagesById,
} from '../mongoFunctions';

export const reposRouter = router({
    all: publicProcedure.query(async (req) => {
        const repos: RepoI[] = await findAllRepos();
        return repos;
    }),
    byId: publicProcedure.input(z.number()).query(async (req) => {
        const repo: RepoI | null = await findRepoById(req.input);
        return repo;
    }),
    allinfo: publicProcedure.input(z.number()).query(async (req) => {
        const langs = await findAllLanguagesById(req.input);
        const issue = await findAllIssuesById(req.input);
        const contrib = await findAllContributorsById(req.input);
        const releases = await findAllReleasesById(req.input);
        const commits = await findAllCommitsById(req.input);
        const response = { ...langs, ...issue, ...contrib, ...releases, ...commits };
        return response;
    }),
});
