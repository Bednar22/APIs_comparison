import mongoose from 'mongoose';
import { ContributorI } from '../types';

const contributorSchema = new mongoose.Schema({
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
    contributions: Number,
    repoId: Number,
});

const Contributor = mongoose.model('contributors', contributorSchema);

const build = (attr: ContributorI) => {
    return new Contributor(attr);
};

export { Contributor };
