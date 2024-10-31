import { Schema, model } from "mongoose";

const user_Schema = new Schema({
    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    walletId: {
        type: Schema.Types.ObjectId,
        ref: 'Wallet'
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const User = model("User", user_Schema);

export default User;