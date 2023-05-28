import mongoose from 'mongoose';

interface Repos {
    title: string;
}

const reposSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false,
    },
});

const Repos = mongoose.model('Repos', reposSchema);

const build = (attr: Repos) => {
    return new Repos(attr);
};

export { Repos };
