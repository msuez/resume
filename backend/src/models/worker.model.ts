
import { Schema, model } from 'mongoose';

const WorkerSchema = new Schema({
    enterprise: {
        type: Schema.Types.ObjectId,
        ref: 'Enterprise',
        required: true,
    },
    workerType: {
        type: Schema.Types.ObjectId,
        ref: 'WorkerType',
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

export default model('Worker', WorkerSchema);
