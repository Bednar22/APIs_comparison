import { books } from './db';
import { findAllCommitsById } from './mongoFunctions';

export const resolvers = {
    Query: {
        books: () => books,
        commits: (parent: any, args: any) => {
            const { id } = args;
            console.log(args);
            return findAllCommitsById(id);
        },
    },
};
