console.log('script.js loaded')
getChuckNorrisQuote()
async function getChuckNorrisQuote() {
    const response = await fetch('/chucknorrisrandomjoke')
    const jsonResponse = await response.json()
}