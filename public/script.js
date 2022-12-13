console.log('script.js loaded')





console.log(document.getElementById("chuckNorrisQuote"))

async function getChuckNorrisQuote() {
    const response = await fetch('/chucknorrisrandomjoke')
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    const fact = jsonResponse.value
    const imgUrl = jsonResponse.icon_url

    document.getElementById("chuckNorrisQuote").innerHTML = fact
    document.getElementById("chuckNorrisImage").getAttributeNode("src").value = imgUrl
}

window.addEventListener("load", event => {
    getChuckNorrisQuote()
    document.getElementById("refreshButton").addEventListener("click", () => {
        getChuckNorrisQuote()
    })

})


