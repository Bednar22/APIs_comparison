import { publicProcedure, router } from '../trpc';
import { z } from 'zod';

type User = {
    id: string;
    name: string;
    age: number;
};

const USERS: User[] = [
    { id: '1', name: 'Kyle', age: 27 },
    { id: '2', name: 'Julie', age: 45 },
];

export const usersRouter = router({
    all: publicProcedure.query((req) => {
        return USERS;
    }),
    byId: publicProcedure.input(z.string()).query((req) => {
        return USERS.find((user) => user.id === req.input);
    }),
    create: publicProcedure.input(z.object({ name: z.string(), age: z.number() })).mutation((req) => {
        const { name, age } = req.input;
        const user: User = { id: (USERS.length + 1).toString(), name, age };
        USERS.push(user);
        return user;
    }),
});
