const express = require('express');
const app = express();
const userModel = require('./usermodel');

// CREATE 📝
app.get('/create', async (req, res) => {
    const createdUser = await userModel.create({
        name: "Suman",
        username: "Sumanthakur",
        email: "suman@gmail.com"
    })

    res.send(createdUser);
});

// UPDATE 💻
app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({username: "Shekharthakur"}, {name: "Shekhar Rita Thakur"}, {new: true});
    
    res.send(updatedUser);
})

// READ 📖 - in read there are two ways to read (read all the users) | (read individual user)
// read all the users
app.get('/read', async (req, res) => {
    let readUsers = await userModel.find();
    
    res.send(readUsers);
})
// read individual user [using find({username: "sam"}) & findOne() we can execute individual user]
// app.get('/read', async (req, res) => {
//     const readUsers = await userModel.find({username: "Shekharthakur"});
//     res.send(readUsers);
// })

// DELETE ❌
app.get('/delete', async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({ username: "Shekharthakur" });
    
    res.send(deletedUser);
})

app.listen(3000);