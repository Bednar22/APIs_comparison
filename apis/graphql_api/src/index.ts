import { ApolloServer } from 'apollo-server-express';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { join } from 'path';
import { resolvers } from './resolvers';
import express from 'express';

dotenv.config();
const app = express();

const typeDefs = readFileSync(join(__dirname, 'schema.graphql'), 'utf8');

const port: number = Number(process.env.PORT) || 4001;

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
    .catch((err) => {
        console.log(err);
    });

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startServer = async (server: ApolloServer) => {
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });
};

startServer(server);

app.listen({ port: port }, () => {
    console.log(`Apollo Server on http://localhost:${port}/graphql`);
});
