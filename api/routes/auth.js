const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


//SIGNUP
router.post("/signup", async (req,res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            email: req.body.email, 
            username: req.body.username,
            password: hashedPass,
        });
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN
router.post("/login", async (req, res)=>{
    try {
        const user= await User.findOne({ username: req.body.username });
        !user && res.status(400).json("Invalid Username or Password");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Invalid Username or Password");

        const{password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router