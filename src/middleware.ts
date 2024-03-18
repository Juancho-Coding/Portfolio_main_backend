import { body } from "express-validator";

/**
 * Array with validation for user name, email, message
 */
export const validateForm = [
    body("name").trim().notEmpty().isLength({ min: 6 }).withMessage("Invalid name"),
    body("email").trim().isEmail().withMessage("Invalid email"),
    body("message").trim().notEmpty().withMessage("Invalid message"),
];
