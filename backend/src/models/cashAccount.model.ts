
import { Schema, model } from 'mongoose';

const CashAccountSchema = new Schema({
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

export default model('CashAccount', CashAccountSchema);
