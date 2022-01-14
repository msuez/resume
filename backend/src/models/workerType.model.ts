
import { Schema, model } from 'mongoose';

const WorkerTypeSchema = new Schema({
    enterprise: {
        type: Schema.Types.ObjectId,
        ref: 'Enterprise',
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

export default model('WorkerType', WorkerTypeSchema);
