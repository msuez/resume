
import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required: [ true, 'The name is required.'],
    },
    surname: {
        type: String,
        required: [ true, 'The surname is required.'],
    },
    email: {
        type: String,
        required: [ true, 'The email is required.'],
        unique: true,
    },
    password: {
        type: String,
        required: [ true, 'The password is required.'],
    },
    role: {
        type: String,
        enum: ['ADMIN_ROLE', 'USER_ROLE'],
        required: [true, 'The role is required.']
    },
    google: {
        type: Boolean,
        default: false,
    },
    verifyCode: {
        type: String,
        required: [true, 'The verification code is required.']
    },
    verified: {
        type: Boolean,
        default: false,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

export default model('User', UserSchema);