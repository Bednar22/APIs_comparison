import { startStandaloneServer } from '@apollo/server/standalone';

export const startServer = async (server: any, port: number) => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: port },
    });

    console.log(`🚀  Server ready at: ${url}`);
};
