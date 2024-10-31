import { Schema, model } from "mongoose";

const wallet_Schema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true, 
        ref: 'User '
      },
    balance: {
        type: Number,
        default: 0, 
        required: true 
      },
    currency: {
        type: String,
        required: true 
      },
    createdAt: {
        type: Date,
        default: Date.now 
      }
});

const Wallet = model("Wallet", wallet_Schema);

export default Wallet;