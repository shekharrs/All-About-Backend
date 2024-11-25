const express = require('express');  // require express
const path = require('path');        // require path
const app = express();

// Setting up parsers for form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up public static files
app.use(express.static(path.join(__dirname, 'public')));

// setup ejs as a view engine
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render("index");
});

// req.params ---> semicolon (:) || req.params.username
app.get('/profile/:username', function(req, res){
    res.send(`Welcome, ${req.params.username} to the website.`);
});

// req.params.username || req.params.age
app.get('/profile/:username/:age', function(req, res){
    res.send(`Welcome, ${req.params.username} of age ${req.params.age}`);
});

app.listen(3000, function() {
    console.log("Server is running...");
});