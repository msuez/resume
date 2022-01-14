
import { Schema, model } from 'mongoose';

const EnterpriseSchema = new Schema({
    enterpriseType: {
        type: Schema.Types.ObjectId,
        ref: 'EnterpriseType',
        required: true,
    },
    detail: {
        type: String,
        required: [ true, 'The name is required.' ],
    },
});

export default model('Enterprise', EnterpriseSchema);