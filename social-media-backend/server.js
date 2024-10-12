// const express = require('express');
import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
// import path from 'path';
// require('dotenv').config();
import dotenv from 'dotenv';
import submissionRoutes from  './routes/submission.js';
import userRoutes from './routes/users.js'
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));
// const submissionRoutes = require('./routes/submissions');
// const userRoutes = require('./routes/users');
app.use('/social-media-backend/submissions', submissionRoutes);
app.use('/social-media-backend/users', userRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});