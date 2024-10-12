// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
import express from 'express';
import { Router } from 'express';
import User from '../models/User.js';

// Seed initial users
Router.post('/seed', async (req, res) => {
    const sampleUsers = ['Rahul', 'Kamal', 'Sanaki', 'John', 'Doe', 'Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];
    try {
        await User.deleteMany({});
        const users = await User.insertMany(sampleUsers.map(name => ({ name })));
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Claim Points
Router.post('/claim/:id', async (req, res) => {
    const randomPoints = Math.floor(Math.random() * 10) + 1;
    const userId = req.params.id;

    try {
        const user = await User.findById(userId);
        user.points += randomPoints;
        await user.save();

        const updatedUsers = await User.find().sort({ points: -1 });
        res.json(updatedUsers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get Leaderboard
Router.get('/', async (req, res) => {
    try {
        const users = await User.find().sort({ points: -1 });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default Router;



// DIFFERENT CODE
// const express = require('express');
// import express from 'express'
// const router = express.Router();
// import User from '../models/User'

// // Seed initial users
// router.post('/seed', async (req, res) => {
//     const sampleUsers = ['Rahul', 'Kamal', 'Sanaki', 'John', 'Doe', 'Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];
//     try {
//         await User.deleteMany({});
//         const users = await User.insertMany(sampleUsers.map(name => ({ name })));
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Claim Points
// router.post('/claim/:id', async (req, res) => {
//     const randomPoints = Math.floor(Math.random() * 10) + 1;
//     const userId = req.params.id;

//     try {
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         user.points += randomPoints;
//         await user.save();

//         const updatedUsers = await User.find().sort({ points: -1 });
//         res.json(updatedUsers);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Get Leaderboard
// router.get('/', async (req, res) => {
//     try {
//         const users = await User.find().sort({ points: -1 });
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // module.exports = router;
// export default router;
