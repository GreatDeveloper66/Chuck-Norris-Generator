console.log('script.js loaded')

fetch('/chucknorrisrandomjoke').then(res => res.json()).then((data) => console.log(data)).catch(err => console.log(err))
/*
getChuckNorrisQuote()
async function getChuckNorrisQuote() {
    const response = await fetch('/chucknorrisrandomjoke')
    const jsonResponse = await response.json()
    document.getElementById("chuckNorrisQuote").innerHTML = jsonResponse.value
}
*/