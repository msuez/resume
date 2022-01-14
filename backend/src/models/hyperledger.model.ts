
import { Schema, model } from 'mongoose';

const HyperledgerSchema = new Schema({
    voucher: {
        type: Schema.Types.ObjectId,
        ref: 'Voucher',
        required: true,
    },
    account: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: true,
    },
    debit: {
        type: Number,
        required: true,
    },
    credit: {
        type: Number,
        required: true,
    },
});

export default model('Hyperledger', HyperledgerSchema);
