// Zadanie dnia: Ankieta

const express = require('express');
const app = express();

app.use(express.static('./public/zadanieDnia/'));

let sumYesVotes = 0;
let sumNoVotes = 0;

app.get('/vote/yes', (req, res) => {
    sumYesVotes++;
    res.send('Thank you for your vote!');
});

app.get('/vote/no', (req, res) => {
    sumNoVotes++;
    res.send('Thank you for your vote!');
});

app.get('/votes/check', (req, res) => {
    res.send('<b>RESULTS</b><br>'
    + '<br>YES: ' + sumYesVotes
    + '<br>NO: ' + sumNoVotes);
});

app.listen(3000, () => {
    console.log('port:3000');
});