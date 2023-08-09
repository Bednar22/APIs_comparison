import mongoose from 'mongoose';
import { PostTestI } from '../types';

const postTestSchema = new mongoose.Schema({
    id: Number,
    field1: String,
    field2: String,
    field3: String,
    field4: String,
    field5: String,
    field6: String,
    field7: String,
    field8: String,
    field9: String,
});

const PostTest = mongoose.model('postTests', postTestSchema);

const build = (attr: PostTestI) => {
    return new PostTest(attr);
};

export { PostTest };
