const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.get('/', (req, res, err) => {
    res.redirect('/login');
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/login.html'))
})

app.post('/login', (req, res) => {
    const { username, password } = req.body
    if (username === 'username' && password === 'password') {
        res.redirect('/secure')
    } else {
        res.redirect('/login')
    }
})

app.get('/secure', (req, res) => {
    res.sendFile(path.join(__dirname + "/public/hemmelig.html"))
})

app.listen(3000, () => {
    console.log(`Server started on port`);
});

