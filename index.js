const express = require('express');
const path = require('path');

const app = express();
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/hi', (req, res) => {
    res.send('Hello World!');
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});
