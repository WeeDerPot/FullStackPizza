const router = require('express').Router();
const passport = require('passport');
const passportLocal = require("passport-local");
const LocalStrategy = require("./passportStrategy").Strategy;
const User = require('./User');
const bcrypt = require("bcryptjs");
require('./passportStrategy')(passport);

router.post("/register", async (req, res) => {
    const { email, password } = req?.body;
    if (!email || !password || typeof email !== "string" || typeof password !== "string" ) {
        res.send("Improper values!")
        return;
    }
    User.findOne({ email: req.body.email }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User already exists!");
        if (!user) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                fullname: req.body.fullname,
                email: req.body.email,
                address: req.body.address,
                password: hashedPassword
            });
            await newUser.save();
            res.send("Success!");
        };
    });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
    res.send("Succesfully Authenticated!");
});

router.get("/user", (req, res) => {
    res.send(req.user);
});

module.exports = router;