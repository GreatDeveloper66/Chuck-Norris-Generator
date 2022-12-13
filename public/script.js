console.log('script.js loaded')




getChuckNorrisQuote()
async function getChuckNorrisQuote() {
    const response = await fetch('/chucknorrisrandomjoke')
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    const fact = jsonResponse.value
    const imgUrl = jsonResponse.icon_url
    
    document.getElementById("chuckNorrisQuote").innerHTML = jsonResponse.value
}
