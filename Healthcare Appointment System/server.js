const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Define routes for login and register
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
