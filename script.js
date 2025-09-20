const jamk = document.getElementById('opr')
const AAAAH = new Audio('aah.mp3')
const scrimer = document.getElementById('scrimer')
const fonch = document.getElementById('body')
const OR = new Audio('fox.mp3')
function slozhen() {
    jamk.classList.add('invisible')
    AAAAH.loop = true
    AAAAH.play()
    setInterval(() => {
        fonch.classList.add('fon')
        setTimeout(() => {
            fonch.classList.add('fonik')
            setTimeout(() => {
                fonch.classList.remove('fonik')
            }, 50);
        }, 50);
    }, 100);
    setInterval(() => {
        fonch.classList.add('fox')
        AAAAH.play()
        OR.play()
        setTimeout(() => {
            fonch.classList.remove('fox')
        }, 1000);
        clearTimeout
    }, 10000);
}

jamk.addEventListener('click', slozhen)