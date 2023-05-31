import { books } from './db';

export const resolvers = {
    Query: {
        books: () => books,
    },
};
