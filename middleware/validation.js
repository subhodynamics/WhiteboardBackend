const { check, validationResult } = require('express-validator');

const validateUserRegistration = [
    check ('email').isEmail().withMessage('Please enter a valid email address'),
    check ('password').isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }).withMessage('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol'),
    check ('name').isLength({ min: 1 }).withMessage('Name is required'),
    check ('age').isInt({ min: 0, max: 120 }).withMessage('Age must be a number between 0 and 120'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];