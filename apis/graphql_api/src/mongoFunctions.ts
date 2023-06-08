import { Repo } from './models/repos';
import { Language } from './models/languages';
import { Issue } from './models/issues';
import { Contributor } from './models/contributors';
import { Commit } from './models/commits';
import { Release } from './models/releases';
import { PostTest } from './models/postTest';

import { PostTestI } from './types';
import { RepoI } from './types';

export const findAllRepos = async (): Promise<RepoI[]> => await Repo.find({});
export const findRepoById = async (id: string): Promise<RepoI | null> => await Repo.findOne({ id: id });
export const findAllCommitsById = async (id: string) => await Commit.find({ repoId: id });
export const findAllIssuesById = async (id: string) => await Issue.find({ repoId: id });
export const findAllContributorsById = async (id: string) => await Contributor.find({ repoId: id });
export const findAllLanguagesById = async (id: string) => await Language.findOne({ repoId: id });
export const findAllReleasesById = async (id: string) => await Release.find({ repoId: id });
export const addObject = async (data: PostTestI) => {
    const newObject = new PostTest({
        id: Date.now(),
        field1: data.field1,
        field2: data.field2,
        field3: data.field3,
        field4: data.field4,
        field5: data.field5,
        field6: data.field6,
        field7: data.field7,
        field8: data.field8,
        field9: data.field9,
    });
    try {
        await newObject.save();
        console.log('Object added to postTest collection successfully!');
    } catch (err) {
        console.error('Error saving object:', err);
        return -1;
    }
    return 1;
};
