
import { Schema, model } from 'mongoose';

const AccountSchema = new Schema({
    enterprise: {
        type: Schema.Types.ObjectId,
        ref: 'Enterprise',
        required: true,
    },
    accountType: {
        type: Schema.Types.ObjectId,
        ref: 'AccountType',
        required: true,
    },
});

export default model('Account', AccountSchema);