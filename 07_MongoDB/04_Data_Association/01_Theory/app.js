const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/', function(req, res) {
    res.send("Welcome");
});

app.get('/create', async function(req, res) {
    let user = await userModel.create({
        username: "Shekhar",
        email: "shekhar@example.com",
        age: 20,
    });
    res.send(user);
})

app.get('/post/create', async (req, res) => {
    let post = await postModel.create({
        postdata: "All the data of POST",
        user: "6749eaec714229324ae99071"
    });

    let user = await userModel.findOne({ _id: "6749eaec714229324ae99071"});
    user.posts.push(post._id);
    await user.save()
    res.send({post, user});
});

app.listen(3000);