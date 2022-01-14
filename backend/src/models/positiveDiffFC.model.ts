
import { Schema, model } from 'mongoose';

const PositiveDiffFCAccountSchema = new Schema({
    account: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: true,
    },
    detail: {
        type: String,
        required: true,
    }
});

export default model('PositiveDiffFCAccount', PositiveDiffFCAccountSchema);
