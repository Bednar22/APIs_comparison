import { Repo } from './models/repos';
import { Language } from './models/languages';
import { Issue } from './models/issues';
import { Contributor } from './models/contributors';
import { Commit } from './models/commits';
import { Release } from './models/releases';

import { RepoI, LanguageInput } from './types';

export const findAllRepos = async (): Promise<RepoI[]> => await Repo.find({});
export const findRepoById = async (id: number): Promise<RepoI | null> => await Repo.findOne({ id: id });
export const findAllCommitsById = async (id: number) => await Commit.find({ repoId: id });
export const findAllIssuesById = async (id: number) => await Issue.find({ repoId: id });
export const findAllContributorsById = async (id: number) => await Contributor.find({ repoId: id });
export const findAllLanguagesById = async (id: number) => await Language.findOne({ repoId: id });
export const findAllReleasesById = async (id: number) => await Release.find({ repoId: id });
export const addLanguageInfo = async (data: LanguageInput) => {
    const newLanguage = new Language({
        repoId: data.repoId,
        languages: data.languages,
    });
    try {
        await newLanguage.save();
    } catch (err) {
        return 'Error while adding new object';
    }
    return 'Object added successfully';
};

export const removeLanguage = async (id: number) => {
    try {
        await Language.deleteOne({ repoId: id });
    } catch (err) {
        return 'Error while deleting language from database';
    }
    return 'Object deleted successfully';
};

export const updateLanguage = async (id: number, newLanguages: { name: string; value: number }[]) => {
    const updatedLanguage = { $set: { languages: newLanguages } };

    try {
        await Language.updateOne({ repoId: id }, updatedLanguage);
    } catch (err) {
        return 'Error while updating language in database';
    }
    return 'Object updated successfully';
};
