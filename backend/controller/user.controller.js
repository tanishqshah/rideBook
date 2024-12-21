const userModel = require("../models/user.model");
const userservice = require("../services/user.service");
const { validationResult} = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const { fullname, email, password } = req.body;
    const { firstname, lastname } = fullname;
    
    const hashPassword = await userModel.hashPassword(password);

    const user = await userservice.createUser({
        firstname, lastname, email, password: hashPassword
    });

    const token = user.generateAuthToken();
    res.status(201).json({ token ,user});
}