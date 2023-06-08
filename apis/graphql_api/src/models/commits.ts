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
        login: {
            type: String,
        },
        id: {
            type: Number,
        },
        node_id: {
            type: String,
        },
        avatar_url: {
            type: String,
        },
        gravatar_id: {
            type: String,
        },
        url: {
            type: String,
        },
        html_url: {
            type: String,
        },
        followers_url: {
            type: String,
        },
        following_url: {
            type: String,
        },
        gists_url: {
            type: String,
        },
        starred_url: {
            type: String,
        },
        subscriptions_url: {
            type: String,
        },
        organizations_url: {
            type: String,
        },
        repos_url: {
            type: String,
        },
        events_url: {
            type: String,
        },
        received_events_url: {
            type: String,
        },
        type: {
            type: String,
        },
        site_admin: {
            type: Boolean,
        },
    },
    committer: {
        login: {
            type: String,
        },
        id: {
            type: Number,
        },
        node_id: {
            type: String,
        },
        avatar_url: {
            type: String,
        },
        gravatar_id: {
            type: String,
        },
        url: {
            type: String,
        },
        html_url: {
            type: String,
        },
        followers_url: {
            type: String,
        },
        following_url: {
            type: String,
        },
        gists_url: {
            type: String,
        },
        starred_url: {
            type: String,
        },
        subscriptions_url: {
            type: String,
        },
        organizations_url: {
            type: String,
        },
        repos_url: {
            type: String,
        },
        events_url: {
            type: String,
        },
        received_events_url: {
            type: String,
        },
        type: {
            type: String,
        },
        site_admin: {
            type: Boolean,
        },
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
