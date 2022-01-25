const router = require("express").Router()
const User = require("../models/User")


//SIGNUP
router.post("/signup", async (req,res)=>{
    try {
        constnewUser = new User({
            email: req.body.email, 
            username: req.body.username,
            password: req.body.password,
        });
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(err);
    }
});

module.exports = router