require('dotenv').config();
const User = require('../models/userModel');
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');

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

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        // check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // check if the password is correct
        // comparePassword is a method already defined in the user model
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        // generate a JWT Token
        const token = jwt.sign({ id: user._id }, JWT_SECRET, {
            expiresIn: '1h'
        });

        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                age: user.age
            }
        });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
module.exports = { registerUser, getUsers, loginUser };