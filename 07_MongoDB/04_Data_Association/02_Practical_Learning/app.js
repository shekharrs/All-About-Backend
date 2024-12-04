const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// Created a profile page with middleware to protect the profile route
app.get("/profile", isLoggedIn, async (req, res) => {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("posts");
  res.render("profile", { user });
});

// Implemented Like Functionality 
app.get("/like/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id }).populate("user");
  
  if (post.likes.indexOf(req.user.userid) === -1) {
    post.likes.push(req.user.userid);
  } else {
    post.likes.splice(post.likes.indexOf(req.user.userid), 1);
  }

  await post.save();
  res.redirect("/profile");
});

// Implemented Edit Functionality
app.get("/edit/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id }).populate("user");

  res.render("edit", {post});
});

// Implemented Edit Functionality
app.post("/update/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOneAndUpdate({ _id: req.params.id }, {content: req.body.content});
  res.redirect("/profile");
});

// Implemented Post Functionality
app.post("/post", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  let { content } = req.body;

  let post = await postModel.create({
    user: user._id,
    content,
  });

  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});

// Register Account
app.post("/register", async (req, res) => {
  let { name, username, password, email, age } = req.body;

  // If the user is already registered then it will execute the status(500) with a message("User is already registered")
  let user = await userModel.findOne({ email });
  if (user) return res.status(500).send("User is already registered");

  // Creating a account (implement bcrypt)
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await userModel.create({
        username,
        name,
        email,
        age,
        password: hash,
      });

      // JWT token set (cookie saving from clientside browser)
      let token = jwt.sign({ email: email, userid: user._id }, "secret");
      res.cookie("token", token);
      res.send("user is now registered.");
    });
  });
});

// Login Account
app.post("/login", async (req, res) => {
  let { email, password } = req.body;

  // If the user is already registered then it will execute the status(500) with a message("User is already registered")
  let user = await userModel.findOne({ email });
  if (!user) return res.status(500).send("Opps! Something went wrong.");

  bcrypt.compare(password, user.password, function (err, result) {
    if (result) {
      let token = jwt.sign({ email: email, userid: user._id }, "secret");
      res.cookie("token", token);
      res.status(200).redirect("/profile");
    } else res.redirect("/login");
  });
});

// Logout Account
app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

// Set up Middleware to protect the profile page route
function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") res.redirect("/login");
  else {
    let data = jwt.verify(req.cookies.token, "secret");
    req.user = data;
    next();
  }
}

app.listen(3000);
