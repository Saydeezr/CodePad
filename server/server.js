const express = require('express');

const app = express();
const PORT = process.env.Port || 3001;

app .use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, function() {
    console.log(`Listening on Port ${PORT}`);
})