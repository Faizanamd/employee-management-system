
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
});
const UserModel = mongoose.model("users", userSchema);
export default UserModel;