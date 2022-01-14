
import { Schema, model } from 'mongoose';

const EnterpriseTypeSchema = new Schema({
    detail: {
        type: String,
        required: [ true, 'The name is required.' ],
    }
});

export default model('EnterpriseType', EnterpriseTypeSchema);