// 2. Przepraszam, jak masz na imię?

const express = require('express');
const app = express();

let firstName = '';

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/name/set/:firstname', (req, res) => {
    firstName = req.params.firstname;
    res.send('I remember your name. You\'re ' + firstName);
});

app.get('/name/show', (req, res) => {
    if(firstName === '') {
        res.send('You didn\'t give me your name :(');
    } else {
        res.send('Are you trying me? :) Relax ' + firstName + ', still remember your name!');
    }
});

app.get('/name/check', (req, res) => {
    if(firstName === '') {
        res.send('Name is not set!');
    } else {
        res.send('Name is saved!');
    }
})

app.listen(3000, () => {
    console.log('Port:3000');
});