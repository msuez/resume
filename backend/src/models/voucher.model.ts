
import { Schema, model } from 'mongoose';

const VoucherSchema = new Schema({
    enterprise: {
        type: Schema.Types.ObjectId,
        ref: 'Enterprise',
        required: true,
    },
    worker: {
        type: Schema.Types.ObjectId,
        ref: 'Worker',
        required: true,
    },
    voucherType: {
        type: Schema.Types.ObjectId,
        ref: 'VoucherType',
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
});

export default model('Voucher', VoucherSchema);
