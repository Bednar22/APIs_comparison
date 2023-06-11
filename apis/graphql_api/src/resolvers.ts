import {
    findAllCommitsById,
    findAllContributorsById,
    findAllIssuesById,
    findAllRepos,
    findAllLanguagesById,
    findRepoById,
    findAllReleasesById,
    addLanguageInfo,
    updateLanguage,
    removeLanguage,
} from './mongoFunctions';
import { LanguageInput } from './types';

export const resolvers = {
    Query: {
        commits: (parent: any, args: { id: number }) => {
            return findAllCommitsById(args.id);
        },
        contributors: (parent: any, args: { id: number }) => {
            return findAllContributorsById(args.id);
        },
        issues: (parent: any, args: { id: number }) => {
            return findAllIssuesById(args.id);
        },
        releases: (parent: any, args: { id: number }) => {
            return findAllReleasesById(args.id);
        },
        allRepos: () => {
            return findAllRepos();
        },
        repoById: (parent: any, args: { id: number }) => {
            return findRepoById(args.id);
        },
        langs: async (parent: any, args: { id: number }) => {
            return await findAllLanguagesById(args.id);
        },
    },
    Mutation: {
        addLanguage: (parent: any, args: { input: any }) => {
            const response = addLanguageInfo(args.input);
            return response;
        },
        updateLanguage: (parent: any, args: { input: LanguageInput }) => {
            const { repoId, languages } = args.input;

            const response = updateLanguage(repoId, languages);
            return response;
        },
        removeLanguage: (parent: any, args: { id: number }) => {
            const response = removeLanguage(args.id);
            return response;
        },
    },
};
