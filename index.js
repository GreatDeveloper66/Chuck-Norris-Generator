
import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()
const port = 3000
import fetch from 'node-fetch'
const api_key = process.env.XRapidAPIKey
const api_host = process.env.XRapidAPIHost

const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';

const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    'X-RapidAPI-Key': api_key,
    'X-RapidAPI-Host': api_host
    }
    };

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`)
})

app.get('/chucknorrisrandomjoke', async (request, response) => {
    const fetchAPI = await fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
    const fetchResponse = await fetchAPI.json()
    response.json(fetchResponse)
})




