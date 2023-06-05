import mongoose from 'mongoose';
import { CommitI } from '../types';

const commitSchema = new mongoose.Schema({
    _id: {
        $oid: String,
    },
    sha: String,
    node_id: String,
    commit: {
        author: {
            name: String,
            email: String,
            date: String,
        },
        committer: {
            name: String,
            email: String,
            date: String,
        },
        message: String,
        tree: {
            sha: String,
            url: String,
        },
        url: String,
        comment_count: Number,
        verification: {
            verified: Boolean,
            reason: String,
            signature: String,
            payload: String,
        },
    },
    url: String,
    html_url: String,
    comments_url: String,
    author: {
        login: String,
        id: Number,
        node_id: String,
        avatar_url: String,
        gravatar_id: String,
        url: String,
        html_url: String,
        followers_url: String,
        following_url: String,
        gists_url: String,
        starred_url: String,
        subscriptions_url: String,
        organizations_url: String,
        repos_url: String,
        events_url: String,
        received_events_url: String,
        type: String,
        site_admin: Boolean,
    },
    committer: {
        login: String,
        id: Number,
        node_id: String,
        avatar_url: String,
        gravatar_id: String,
        url: String,
        html_url: String,
        followers_url: String,
        following_url: String,
        gists_url: String,
        starred_url: String,
        subscriptions_url: String,
        organizations_url: String,
        repos_url: String,
        events_url: String,
        received_events_url: String,
        type: String,
        site_admin: Boolean,
    },
    parents: [
        {
            sha: String,
            url: String,
            html_url: String,
        },
    ],
    repoId: Number,
});

const Commit = mongoose.model('commits', commitSchema);

const build = (attr: CommitI) => {
    return new Commit(attr);
};

export { Commit };
