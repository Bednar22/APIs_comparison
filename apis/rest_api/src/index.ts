import express, { Application } from 'express';
import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';
import { reposRouter } from './routes/repos';
import { commitsRouter } from './routes/commits';
import { testRouter } from './routes/testRoutes';
import { contributorsRouter } from './routes/contributors';
import { issuesRouter } from './routes/issues';
import { langsRouter } from './routes/languages';

dotenv.config();

const port: number = Number(process.env.PORT) || 3001;
const app: Application = express();
app.use(express.json());

//ROUTES
app.use(reposRouter);
app.use(commitsRouter);
app.use(testRouter);
app.use(contributorsRouter);
app.use(issuesRouter);
app.use(langsRouter);

//DATABASE CONNECTION
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
    console.log(`App is listening on port ${port} !`);
});
