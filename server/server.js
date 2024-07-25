const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.Port || 3001;

app.use(express.static('../client/dist'));
app .use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, function() {
    console.log(`Listening on Port ${PORT}`);
})