const express = require('express')
const app = express()

// Middleware Implementaion
app.use(function(req, res, next){
    console.log("Middleware Started...");
    next();
});

app.get('/', function(req, res){
    res.send("Home Page.");
});

app.get('/about', function(req, res){
    res.send("About Page.");
});

app.get('/profile', function(req, res, next){
    return next(new Error("Error found✅"));
})

// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(3000);