const express = require('express');
const axios = require('axios');

const app = express();

app.get('', (req, res) => {
    res.json({ msg: 'OK' });
});


app.listen(process.env.PORT);