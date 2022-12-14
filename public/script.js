async function getChuckNorrisQuote() {
    const response = await fetch('/chucknorrisrandomjoke')
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    const fact = jsonResponse.value
    const imgUrl = jsonResponse.url

    document.getElementById("chuckNorrisQuote").innerHTML = fact
    console.log(imgUrl)
    document.getElementById("chuckNorrisImage").src = imgUrl
}

window.addEventListener("load", event => {
    getChuckNorrisQuote()
    document.getElementById("refreshButton").addEventListener("click", () => {
        getChuckNorrisQuote()
    })

})


