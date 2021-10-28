// Imports
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const User = require("./User");

const LocalStrategy = passportLocal.Strategy;

require('dotenv').config();

// Mongo DB Connection
mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>{
    console.log("MongoDB connected...");
    console.log(`Server running on port ${PORT}...`);
})
.catch((err) => console.log(err.message));

// Middleware
const app = express();
app.use(express.json());
app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// Passport
passport.use(
    new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, (email, password, done) => {
        User.findOne({ email: email }, (err, user) => {
            if (err) throw err;
            if (!user) return done(null, false);
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) throw err;
                if (result === true) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        });
    })
);

passport.serializeUser((user, cb) => {
    cb(null, user.id);
});
passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
        const userInformation = {
            email: user.email,
            fullname: user.fullname,
            address: user.address,
            isAdmin: user.isAdmin,
            id: user._id
        };
        cb(err, userInformation);
    });
});

// isAdmin Middleware
const isAdminMiddleware = (req, res, next) => {
    const { user } = req;
    if (user) {
        User.findOne({ email: user.email }, (err, doc) => {
            if (err) throw err;
            if (doc?.isAdmin) {
                next();
            } else {
                res.send("Only Admins can perform this!")
            } 
        })
    } else {
        res.send("Sorry you aren't logged in!")
    }
}

// Routes
app.post("/auth/register", async (req, res) => {
    const { email, password } = req?.body;
    if (!email || !password || typeof email !== "string" || typeof password !== "string" ) {
        res.send("Improper values!")
        return;
    }
    User.findOne({ email: req.body.email }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User already exists!");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                fullname: req.body.fullname,
                email: req.body.email,
                address: req.body.address,
                password: hashedPassword,
                //isAdmin: true
            });
            await newUser.save();
            res.send("Successfully Registered!");
        };
    });
});

app.post("/auth/login", passport.authenticate("local"), (req, res) => {
    res.send("Succesfully Authenticated!");
});

app.get("/auth/user", (req, res) => {
    res.send(req.user);
});

app.get("/auth/logout", (req, res) => {
    req.logout();
    res.send("Logged out Successfully!");
});

app.post("/auth/deleteuser", isAdminMiddleware, async (req, res) => {
    await User.findByIdAndDelete(req.body.id, (err) => {
        if (err) throw err;
    });
    res.send("Successfully Deleted!");
});

app.get("/auth/getallusers", isAdminMiddleware, async (req, res) => {
    await User.find({}, (err, data) => {
        res.send(data);
    });
});

/*app.use('/auth', require('./auth.route'));*/

// Connect to PORT 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...See me below as well`);
});
