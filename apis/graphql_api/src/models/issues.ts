import mongoose from 'mongoose';
import { IssueI } from '../types';

const issueSchema = new mongoose.Schema({
    _id: {
        $oid: String,
    },
    url: String,
    repository_url: String,
    labels_url: String,
    comments_url: String,
    events_url: String,
    html_url: String,
    id: Number,
    node_id: String,
    Number: Number,
    title: String,
    user: {
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
    labels: [
        {
            id: Number,
            node_id: String,
            url: String,
            name: String,
            color: String,
            default: Boolean,
            description: String,
        },
    ],
    state: String,
    locked: Boolean,
    assignee: Boolean,
    assignees: [mongoose.Schema.Types.Mixed],
    milestone: Boolean,
    comments: Number,
    created_at: String,
    updated_at: String,
    closed_at: Boolean,
    author_association: String,
    active_lock_reason: Boolean,
    draft: Boolean,
    pull_request: {
        url: String,
        html_url: String,
        diff_url: String,
        patch_url: String,
        merged_at: Boolean,
    },
    body: String,
    reactions: mongoose.Schema.Types.Mixed,
    timeline_url: String,
    performed_via_github_app: Boolean,
    state_reason: Boolean,
    repoId: Number,
});

const Issue = mongoose.model('issues', issueSchema);

const build = (attr: IssueI) => {
    return new Issue(attr);
};

export { Issue };
