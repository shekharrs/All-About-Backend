const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/profile', isLoggedIn, (req, res) => {
    console.log(req.user);
    res.render("login");
});

app.get('/login', (req, res) => {
    res.render("login");
});

// Register Account
app.post('/register', async (req, res) => {
    let {name, username, password, email, age} = req.body;

    // If the user is already registered then it will execute the status(500) with a message("User is already registered")
    let user = await userModel.findOne({email});
    if(user) return res.status(500).send("User is already registered");

    // Creating a account (implement bcrypt)
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let user = await userModel.create({
                username,
                name,
                email,
                age,
                password: hash
            });

            // JWT token set (cookie saving from clientside browser)
            let token = jwt.sign({email: email, userid: user._id}, "secret");
            res.cookie("token", token);
            res.send("user is now registered.");
        })
    })
});

// Login Account
app.post('/login', async (req, res) => {
    let {email, password} = req.body;

    // If the user is already registered then it will execute the status(500) with a message("User is already registered")
    let user = await userModel.findOne({email});
    if(!user) return res.status(500).send("Opps! Something went wrong.");

    bcrypt.compare(password, user.password, function(err, result) {
        if(result){
            let token = jwt.sign({email: email, userid: user._id}, "secret");
            res.cookie("token", token);
            res.status(200).send("Welcome to the page, now you are login.");

        }
        else res.redirect('/login');
    })
});

// Logout Account
app.get('/logout', (req, res) => {
    res.cookie("token", "");
    res.redirect("/login");
});

// Setting up Middleware
function isLoggedIn(req, res, next){
    if(req.cookies.token === "") res.send("You must be Login First.");
    else{
        let data = jwt.verify(req.cookies.token, "secret");
        req.user = data;
    }
};

app.listen(3000);