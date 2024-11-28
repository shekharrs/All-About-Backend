const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const userModel = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create',  (req, res) => {
    let {username, email, password, age} = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let createdUser = await userModel({
                username,
                email,
                password: hash,
                age
            });

            let token = jwt.sign({email}, "secret");
            res.cookie("token", token);
            console.log(req.cookies); // cookies is stored in client side server
        
            res.send(createdUser);
        });
    });
});

app.listen(3000);