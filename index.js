require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch');

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`)
})

