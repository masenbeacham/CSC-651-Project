const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User'); // Import your User model

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        // Find a user with the provided username in the database
        const user = await User.findOne({ where: { username } });
        
        // Check if user exists and password is correct
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Internal server error');
    }
});

// Logout Route
router.post('/logout', (req, res) => {
    // If using JWT, just inform the client to remove the token
    res.send('Logout successful');
});

module.exports = router;
