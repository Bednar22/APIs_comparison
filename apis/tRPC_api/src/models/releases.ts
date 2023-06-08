import mongoose from 'mongoose';
import { ReleaseI } from '../types';

const releaseSchema = new mongoose.Schema({
    _id: {
        $oid: String,
    },
    url: String,
    assets_url: String,
    upload_url: String,
    html_url: String,
    id: Number,
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
    node_id: String,
    tag_name: String,
    target_commitish: String,
    name: String,
    draft: Boolean,
    prerelease: Boolean,
    created_at: String,
    published_at: String,
    assets: Array<mongoose.Schema.Types.Mixed>,
    tarball_url: String,
    zipball_url: String,
    body: String,
    reactions: Object,
    repoId: Number,
});

const Release = mongoose.model('releases', releaseSchema);

const build = (attr: ReleaseI) => {
    return new Release(attr);
};

export { Release };
