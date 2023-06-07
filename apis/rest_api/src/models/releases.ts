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
