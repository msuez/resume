
import { Schema, model } from 'mongoose';

const SocialCapitalAccountSchema = new Schema({
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

export default model('SocialCapitalAccount', SocialCapitalAccountSchema);
