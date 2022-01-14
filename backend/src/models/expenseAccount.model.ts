
import { Schema, model } from 'mongoose';

const ExpenseAccountSchema = new Schema({
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

export default model('ExpenseAccount', ExpenseAccountSchema);
