// // const express = require('express');
// // const multer = require('multer');
// // const router = express.Router();
// // const Submission = require('../models/Submission');
// // import express from 'express'
// import multer from "multer";
// import { Router } from "express";
// import SubmissionForm from "../../social-media-frontned/src/components/SubmissionForm";
// // Configure multer for file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage });

// // Route to handle user submissions
// router.post('/', upload.array('images', 5), async (req, res) => {
//     const { name, socialMediaHandle } = req.body;
//     const images = req.files.map(file => file.path);
//     try {
//         const newSubmission = new Submission({ name, socialMediaHandle, images });
//         await newSubmission.save();
//         res.status(201).json(newSubmission);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Route to fetch all submissions
// router.get('/', async (req, res) => {
//     try {
//         const submissions = await Submission.find();
//         res.json(submissions);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// module.exports = router;

import express from 'express';
import multer from 'multer';
import path from 'path';
import Submission from '../models/Submission.js'; // Make sure the path is correct
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const router = express.Router();

// To handle file path resolution properly with ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Make sure 'uploads/' directory exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Route to handle user submissions
router.post('/', upload.array('images', 5), async (req, res) => {
    const { name, socialMediaHandle } = req.body;
    const images = req.files.map(file => file.path);
    try {
        const newSubmission = new Submission({ name, socialMediaHandle, images });
        await newSubmission.save();
        res.status(201).json(newSubmission);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to fetch all submissions
router.get('/', async (req, res) => {
    try {
        const submissions = await Submission.find();
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
