const User = require('../models/userModel');

const registerUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        const {password, ...userWithoutPassword} = newUser.toObject();
        res.status(201).json({
            message: 'User registered successfully',
            user: userWithoutPassword
        });
    }   catch (error) {
        console.error('Error registering user:', error);d
        res.status(400).json({error: error.message});
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = { registerUser, getUsers };