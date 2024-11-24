const express = require('express');
const app = express();              
const path = require('path');

// Setting up view engine
app.set("view engine", "ejs");

// Setting up paras
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up public static files
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res) {
    res.render("index");
})

app.listen(3000);