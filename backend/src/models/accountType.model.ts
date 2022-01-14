
import { Schema, model } from 'mongoose';

const AccountTypeSchema = new Schema({
    detail: {
        type: String,
        required: [true, 'The detail is required.'],
    },
});

export default model('AccountType', AccountTypeSchema);