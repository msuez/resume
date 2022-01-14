
import { Schema, model } from 'mongoose';

const VoucherTypeSchema = new Schema({
    detail: {
        type: String,
        required: true,
    },
});

export default model('VoucherType', VoucherTypeSchema);
