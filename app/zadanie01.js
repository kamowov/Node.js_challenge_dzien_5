// 1: Dodawanie ze ścieżki

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/sum/:first/:second', (req, res) => {
    let firstNum = parseInt(req.params.first, 10);
    let secondNum = parseInt(req.params.second, 10);

    let sum = firstNum + secondNum;

    res.send('SUM OF TWO NUMBERS: ' + sum);
});

app.listen(3000, () => {
    console.log('port:3000');
});