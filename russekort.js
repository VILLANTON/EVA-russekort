navnEl = document.querySelector("#navn")
telfEl = document.querySelector("#telf")
russenavnEl = document.querySelector("#russenavn")
russetypeEl = document.querySelector("#russetype")

navnInput = document.querySelector("#navn_input")
telfInput = document.querySelector("#telf_input")
skoleInput = document.querySelector("#skole")

navnInput.addEventListener("input",byttNavn)
telfInput.addEventListener("input",byttTelf)
skoleInput.addEventListener("input",byttSkole)

russelueEl = document.querySelector("#russelue")



function byttNavn () {
    navnEl.innerHTML = navnInput.value
}
function byttTelf () {
    telfEl.innerHTML = telfInput.value
}
function byttSkole () {
    russenavnEl.innerHTML = skoleInput.value
}

main2El = document.querySelector("#main2")
russfargeEl = document.querySelector("#russfarge")
//russfargeEl.addEventListener("input",getSelectedRussFarge)


function displayRadioValue() {
    var valg = document.getElementsByName('russFarge');
    for (i = 0; i < valg.length; i++) {
        if (valg[i].checked)
            if(valg[i].value == "rød") {
                main2El.style.background = "radial-gradient(circle at center, rgb(255, 255, 255) 0%, red 100%)";
                russetypeEl.innerHTML = "Rødruss"
                russelueEl.style.filter = "hue-rotate(0deg)"
            }
            else if(valg[i].value == "blå") {
                main2El.style.background = "radial-gradient(circle at center, rgb(255, 255, 255) 0%, blue 100%)";
                russetypeEl.innerHTML = "Blåruss"
                
            }
            else if(valg[i].value == "grønn") {
                main2El.style.background = "radial-gradient(circle at center, rgb(255, 255, 255) 0%, green 100%)";
                russetypeEl.innerHTML = "Bonderuss"
                russelueEl.style.filter = "hue-rotate(90deg)"
            }
            else if(valg[i].value == "svart") {
                main2El.style.background = "radial-gradient(circle at center, rgb(255, 255, 255) 0%, black 100%)";
                russetypeEl.innerHTML = "Svartruss"
            }
    }
}

sitatEl = document.querySelector("#sitat")
sitatInput = document.getElementById("sitat_input")
sitatInput.addEventListener("click",writeJoke)

bildeEl = document.querySelector("#bilde")
bildeInput = document.getElementById("bilde_input")
bildeInput.addEventListener("click",showShiba)

/*
function getSelectedRussFarge() {
    const selectedRadio = russFarge.querySelector('input[name="russFarge"]:checked');
    if (selectedRadio) {
        main2El = selectedRadio.value
        console.log(main2El.value)
    } else {
        return null; // No radio button selected
    }
}


*/







/*
let sizeEl = document.querySelector("#size")
    function adjustLetterSpacing() {
        let containerWidth = document.querySelector('#main2').offsetWidth;
        let textWidth = document.querySelector('#russenavn').offsetWidth;
        let letterSpacing = (containerWidth - textWidth) / (document.querySelector('#russenavn').textContent.length - 1);
        document.querySelector('#russenavn').style.letterSpacing = letterSpacing + 'px';
    }

    // Call adjustLetterSpacing initially and on window resize
    adjustLetterSpacing();
    sizeEl.addEventListener("click", adjustLetterSpacing);
*/


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
    sitatEl.innerHTML = joke // endre til riktig element selector
}

async function getShiba () {
    console.log("q")
    const url = "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true"
    const data = await fetch (url)
    const json = await data.json()
    shibaImg = json[0]
    return shibaImg
}

async function showShiba() {
    console.log("f")
    await getShiba()
    bildeEl.src = shibaImg // endre til riktig element selector
}