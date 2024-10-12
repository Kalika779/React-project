// const mongoose = require('mongoose');
import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    socialMediaHandle: { type: String, required: true },
    images: [{ type: String }]
});

const Submission = mongoose.model('Submission', submissionSchema);
// module.exports = Submission;
export default Submission;