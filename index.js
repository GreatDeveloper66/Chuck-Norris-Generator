if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch');
const api_key = process.env.X-RapidAPI-Key
const api_host = proces.env.X-RapidAPI-Host

app.use(express.static('public'))


app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`)
})

app.get('/chucknorrisrandomjoke', async (request, response) => {

})

const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';

const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    'X-RapidAPI-Key': api_key,
    'X-RapidAPI-Host': api_host
    }
    };

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
