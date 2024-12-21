const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { validatioResult } = require("express-validator");
const userController = require("../controller/user.controller")

router.post("/register", [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("fullname.firstname").isLength({ min: 3 }).withMessage('Min length 3'),
    body("password").isLength({min:6}).withMessage("Min length 6")
    ],
    userController.registerUser
)

module.exports = router;