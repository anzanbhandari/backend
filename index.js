require('dotenv').config()
const express = require('express')
const app = express()

const port  = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>This is the login page</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h3> This channel is restricted </h3>')
})

app.get ('/facebook', (req, res) => {
    res.send('Facebook ko id password k ho')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port} `);
})