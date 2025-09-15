const jamk = document.getElementById('opr')
const scrimer = document.getElementById('scrimac')
const scrim = document.querySelector('scrimac')
const AAAAH = document.getElementById('AAH')
function slozhen() {
    scrimer.src = "scrimer.jpg"
    scrim.append(scrimer)
    scrimer.textContent = "СКИБИДИ ДОП ДОП"
    var audio = new Audio();
    audio.src = 'src/sound.mp3';
    audio.autoplay = true;

}
jamk.addEventListener('click', slozhen)