const express = require('express');
const app = express();
const PORT = 5000;

const bodyParser = require('body-parser');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

let enhydra = ['Devon', 'Austin', 'Isaac', 'Konou', 'Cory'];

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

app.get('/enhydra', (req,res) => {
    res.send(enhydra);
});

app.post('/enhydra', (req,res) => {
    let newValue = req.body.name;
    enhydra.push(newValue);
    res.sendStatus(200);
});