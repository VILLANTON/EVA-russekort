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
    tekstEL.innerHTML = joke
}