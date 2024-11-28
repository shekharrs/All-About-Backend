const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); // require cookie-parser
const bcrypt = require('bcrypt');              // require bcrypt
const jwt = require("jsonwebtoken");           // require jsonwebtoken

// Cookie Parser
app.use(cookieParser());

/* Cookie setting - use res to set the cookie */
// app.get('/', function(req, res) {
//     res.cookie("Name", "Shekhar Thakur");
//     res.send("DONE DANA DONE!!");
// });

/* Cookie read - use req to read the cookie */
// app.get('/read', function(req, res) {
//     console.log(req.cookies);
//     res.send('read page');
// })

/*******************************************************************/

/* encrypt -- convert a normal string into a hash format with help of genSalt which randomly generate a string */
// app.get('/', function(req, res) {
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash("ZohoZoho", salt, function(err, hash) {
//             console.log(hash);
//         })
//     });
//     res.send("Start Mode One....");
// });

/* decrypt -- in decrypt it basically compare the password in plain text and in hash if both the value is true then it means that the password is match otherwise it is false and it is not a matched password */
// bcrypt.compare("ZohoZoho", "$2b$10$00v8c2I.FSJCC5gsVBmXhuVf7MJgKc/6rwDT/WX5vRFf1rsB4GX4G", function(err, result) {
//     console.log(result);    
// })

/*******************************************************************/

// Set the JWT token data
app.get('/', function(req, res) {
    let token = jwt.sign({email: "shekhar@example.com"}, "secret");
    res.cookie("token", token);
    res.send("done");
});

// Read the JWT token data
app.get('/read', function(req, res) {
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
    res.send('read page')
});

app.listen(3000);