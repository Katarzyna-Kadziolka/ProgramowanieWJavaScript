document.addEventListener("DOMContentLoaded", start)
document.addEventListener('keypress', onKeyPress)

function start() {

}

const KeyToSound = {
    'a': document.querySelector('#s1'),
    's': document.querySelector('#s2'),
}
function onKeyPress(event) {
    // const key = event.key
    // logika mapowania key -> sound
    const sound = KeyToSound[event.key]
    playSound(sound)
}

function playSound(sound) {
    if (!sound) {
        return
    }
    sound.currentTime = 0
    sound.play()
}
// Date.now()