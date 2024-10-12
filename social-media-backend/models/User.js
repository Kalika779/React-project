// const mongoose = require('mongoose');
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    points: { type: Number, default: 0 }
});

const User = mongoose.model('User', userSchema);
// module.exports = User;
export default User;