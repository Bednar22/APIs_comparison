import { books } from './db';
import {
    findAllCommitsById,
    findAllContributorsById,
    findAllIssuesById,
    findAllRepos,
    findAllLanguagesById,
    findRepoById,
    findAllReleasesById,
} from './mongoFunctions';

export const resolvers = {
    Query: {
        commits: (parent: any, args: { id: string }) => {
            return findAllCommitsById(args.id);
        },
        contributors: (parent: any, args: { id: string }) => {
            return findAllContributorsById(args.id);
        },
        issues: (parent: any, args: { id: string }) => {
            return findAllIssuesById(args.id);
        },
        releses: (parent: any, args: { id: string }) => {
            return findAllReleasesById(args.id);
        },
        allRepos: () => {
            return findAllRepos();
        },
        repoById: (parent: any, args: { id: string }) => {
            return findRepoById(args.id);
        },
    },
};
