navnEl = document.querySelector("#navn")
telfEl = document.querySelector("#telf")
russenavnEl = document.querySelector("#russenavn")

navnInput = document.querySelector("#navn_input")
telfInput = document.querySelector("#telf_input")
skoleInput = document.querySelector("#skole")

navnInput.addEventListener("input",byttNavn)
telfInput.addEventListener("input",byttTelf)
skoleInput.addEventListener("input",byttSkole)

function byttNavn () {
    navnEl.innerHTML = navnInput.value
}
function byttTelf () {
    telfEl.innerHTML = telfInput.value
}
function byttSkole () {
    russenavnEl.innerHTML = skoleInput.value
}








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