//Types for every database object

export interface RepoI {
    _id: {
        $oid: string;
    };
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: false;
    owner: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
    };
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: boolean;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    has_discussions: boolean;
    forks_count: number;
    mirror_url: boolean;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: {
        key: string;
        name: string;
        spdx_id: string;
        url: string;
        node_id: string;
    };
    allow_forking: boolean;
    is_template: boolean;
    web_commit_signoff_required: boolean;
    topics: Array<string>;
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
    score: number;
}

export interface ReleaseI {
    _id: {
        $oid: string;
    };
    url: string;
    assets_url: string;
    upload_url: string;
    html_url: string;
    id: number;
    author: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
    };
    node_id: string;
    tag_name: string;
    target_commitish: string;
    name: string;
    draft: boolean;
    prerelease: boolean;
    created_at: string;
    published_at: string;
    assets: Array<any>;
    tarball_url: string;
    zipball_url: string;
    body: string;
    reactions: object;
    repoId: number;
}

export interface LanguageI {
    repoId: number;
    languages: [{ name: string; value: number }];
}

export interface LanguageInput {
    repoId: number;
    languages: { name: string; value: number }[];
}

export interface IssueI {
    _id: {
        $oid: string;
    };
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    id: number;
    node_id: string;
    number: number;
    title: string;
    user: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
    };
    labels: [
        {
            id: number;
            node_id: string;
            url: string;
            name: string;
            color: string;
            default: boolean;
            description: string;
        }
    ];
    state: string;
    locked: boolean;
    assignee: boolean;
    assignees: [any];
    milestone: boolean;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at: boolean;
    author_association: string;
    active_lock_reason: boolean;
    draft: boolean;
    pull_request: {
        url: string;
        html_url: string;
        diff_url: string;
        patch_url: string;
        merged_at: boolean;
    };
    body: string;
    reactions: object;
    timeline_url: string;
    performed_via_github_app: boolean;
    state_reason: boolean;
    repoId: number;
}

export interface ContributorI {
    _id: {
        $oid: string;
    };
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    contributions: number;
    repoId: number;
}

export interface CommitI {
    _id: {
        $oid: string;
    };
    sha: string;
    node_id: string;
    commit: {
        author: {
            name: string;
            email: string;
            date: string;
        };
        committer: {
            name: string;
            email: string;
            date: string;
        };
        message: string;
        tree: {
            sha: string;
            url: string;
        };
        url: string;
        comment_count: number;
        verification: {
            verified: boolean;
            reason: string;
            signature: string;
            payload: string;
        };
    };
    url: string;
    html_url: string;
    comments_url: string;
    author: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
    };
    committer: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
    };
    parents: [
        {
            sha: string;
            url: string;
            html_url: string;
        }
    ];
    repoId: number;
}

export interface PostTestI {
    id: number;
    field1: string;
    field2: string;
    field3: string;
    field4: string;
    field5: string;
    field6: string;
    field7: string;
    field8: string;
    field9: string;
}

export interface TransformedLanguage {
    name: string;
    value: number;
}
