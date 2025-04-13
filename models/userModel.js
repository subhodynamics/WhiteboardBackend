const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        unique: true,
        required: true,
        minLength: 8
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 120
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// hash password before sending/saving 
userSchema.pre('save', async function(next) {
    // if password is modified, hash it (doc ke iss instance pe creation ke time pe value set hona bhi changes hai)
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10); // add salt of len 10
    }
    next();
});

// passowrd comparison
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;