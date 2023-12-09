import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: AbstractRangeString,
        required: true,
        unique: true
    },
    email: {
        type: AbstractRangeString,
        required: true,
        unique: true
    },
    password: {
        type: AbstractRangeString,
        required: true
    }
},
    { timestamps: true }
)

const User=mongoose.model('User',userSchema);

export default User;