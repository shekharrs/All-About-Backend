/* Form Handling */
// Form handling is the process of collecting and processing data submitted through HTML
// forms. In Express.js, this is typically accomplished using middleware like body-parser or the
// built-in express.json() and express.urlencoded() methods. These tools help parse incoming
// request bodies, making it easier to access form data

// Example of Form Handling
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    res.send(`Received the name: ${name} and email: ${email}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});