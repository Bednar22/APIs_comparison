import mongoose from 'mongoose';
import { LanguageI } from '../types';

const languageSchema = new mongoose.Schema({
    repoId: Number,
    languages: [
        {
            name: String,
            value: Number,
        },
    ],
});

const Language = mongoose.model('languages', languageSchema);

const build = (attr: LanguageI) => {
    return new Language(attr);
};

export { Language };
