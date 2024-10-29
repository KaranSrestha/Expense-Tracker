const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const User = require("..\Models\User");

exports.signup = async (req, res) => {
    const {username, password} = req.body;
    try{
        const user = new User({username: username, password: bcrypt.hash(password, 10)});
        await user.save();
        res.status(200).json({msg: "Account created"});
    }catch(e){
        res.status(500).json({msg: e.message});
    }
}