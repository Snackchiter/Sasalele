const jamk = document.getElementById('opr')
const AAAAH = new Audio('aah.mp3')
const scrimer = document.getElementById('scrimer')
function slozhen() {
    AAAAH.play()
    scrimer.classList.toggle('invisible')
}

jamk.addEventListener('click', slozhen)