async function getJoke () {
    const url = "https://v2.jokeapi.dev/joke/Dark"
    const data = await fetch (url)
    const json = await data.json()
    let joke = ""

    if ("joke" in json) {
        joke = json.joke
        console.log(joke);
    }
    else if ("setup" in json && "delivery" in json) {
        joke = json.setup +" "+ json.delivery
        console.log(joke);
    }
    return joke
}

async function writeJoke() {
    joke = await getJoke()
    tekstEL.innerHTML = joke // endre til riktig element selector
}

async function getShiba () {
    const url = "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true"
    const data = await fetch (url)
    const json = await data.json()
    shibaImg = json[0]
    return shibaImg
}

async function showShiba() {
    await getShiba()
    imgEl.src = shibaImg // endre til riktig element selector
}