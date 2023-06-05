import mongoose from 'mongoose';
import { LanguageI } from '../types';

const languageSchema = new mongoose.Schema({
    _id: {
        $oid: String,
    },
    repoId: Number,
    dynamic: mongoose.Schema.Types.Mixed,
});

const Language = mongoose.model('languages', languageSchema);

const build = (attr: LanguageI) => {
    return new Language(attr);
};

export { Language };
