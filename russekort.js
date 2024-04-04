navnEl = document.querySelector("#navn")
navnInput = document.querySelector("#navn_input")

navnInput.addEventListener("input",byttNavn)

function byttNavn () {
    navnEl.innerHTML = navnInput.value
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