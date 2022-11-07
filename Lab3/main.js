document.addEventListener("DOMContentLoaded", start)
document.addEventListener('keypress', onKeyPress)

let KeyToSound
let TracksInfo
let metronome
let metronomeStartButton
let metronomeStopButton
const track1 = []
const track2 = []
const track3 = []
const track4 = []

function start() {
    KeyToSound = {
        'a': document.querySelector('#s1'),
        's': document.querySelector('#s2'),
        'd': document.querySelector('#s3'),
        'f': document.querySelector('#s4'),
        'g': document.querySelector('#s5'),
        'h': document.querySelector('#s6'),
        'j': document.querySelector('#s7'),
        'k': document.querySelector('#s8'),
        'l': document.querySelector('#s9'),
    }
    TracksInfo = [
        {
            recordButton: document.querySelector("#record1"),
            stopButton: document.querySelector("#stop1"),
            track: track1,
            recording: false,
            checkBox: document.querySelector("#track1"),
        },
        {
            recordButton: document.querySelector("#record2"),
            stopButton: document.querySelector("#stop2"),
            track: track2,
            recording: false,
            checkBox: document.querySelector("#track2"),
        },
        {
            recordButton: document.querySelector("#record3"),
            stopButton: document.querySelector("#stop3"),
            track: track3,
            recording: false,
            checkBox: document.querySelector("#track3"),
        },
        {
            recordButton: document.querySelector("#record4"),
            stopButton: document.querySelector("#stop4"),
            track: track4,
            recording: false,
            checkBox: document.querySelector("#track4"),
        }
    ]
    
    const recordButtons = document.getElementsByClassName('recordButton')
    for(button of recordButtons) {
        button.addEventListener('click', onRecordButtonClick)
    }

    const stopButtons = document.getElementsByClassName('stopButton')
    for(button of stopButtons) {
        button.addEventListener('click', onStopButtonClick)
    }

    const playButton = document.querySelector("#playButton")
    playButton.addEventListener('click', onPlayButtonClick)

    metronomeStartButton = document.querySelector("#metronomeStartButton")
    metronomeStartButton.addEventListener('click', onMetronomeStartButtonClick)

    metronomeStopButton = document.querySelector("#metronomeStopButton")
    metronomeStopButton.addEventListener('click', onMetronomeStopButton)

    metronome = document.querySelector("#metronome")
}


function onKeyPress(event) {
    // const key = event.key
    // logika mapowania key -> sound
    const sound = KeyToSound[event.key]
    playSound(sound)
    if(someTrackRecording()) {
        record(sound)
    }
}

function playSound(sound) {
    if (!sound) {
        return
    }
    sound.currentTime = 0
    sound.play()
    console.log("Playing 🎧:"  + JSON.stringify(sound.src))
}

function someTrackRecording () {
    return TracksInfo.some(a => a.recording == true)
}

function record(sound) {
    const trackInfo = TracksInfo.find(a => a.recording == true)
    const track = trackInfo.track
    track.push(sound)
    console.log(track)
}

function onRecordButtonClick(event) {
    const trackInfo = TracksInfo.find(a => a.recordButton == event.target)
    changeButtonsActivity(trackInfo)
    const track = trackInfo.track
    trackInfo.recording = true
    clearTrack(track)
}

function onStopButtonClick(event) {
    const trackInfo = TracksInfo.find(a => a.stopButton == event.target)
    changeButtonsActivity(trackInfo)
    trackInfo.recording = false
}

function clearTrack(array) {
    while (array.length > 0) {
        array.pop();
    }
}

function changeButtonsActivity(trackInfo) {
    if(trackInfo.recordButton.disabled) {
        trackInfo.recordButton.disabled = false
       trackInfo.stopButton.disabled = true 
    }
    else{
       trackInfo.recordButton.disabled = true
       trackInfo.stopButton.disabled = false 
    }
}

function onPlayButtonClick() {
    const tracks = getCheckedTracks()
    for(const track of tracks) {
        let time = 0;
        for(const sound of track) {
            setTimeout(() => playSound(sound), time * 1000)
            time += sound.duration;
        }
    } 
}

function getCheckedTracks() {
    const checkedBoxes = document.querySelectorAll('input:checked');
    const tracks = []
    for(trackInfo of TracksInfo) {
        for(checkedBox of checkedBoxes) {
            if(trackInfo.checkBox === checkedBox) tracks.push(trackInfo.track)
        }
    }
    return tracks
}

let metronomeFunction;
const metronomeSound = new Audio('./sounds/metronome.wav')
function onMetronomeStartButtonClick() {
    switchButtonToMetronomeStopButton()
    metronome.disabled = true;
    const rate = metronome.value
    console.log(rate)
    metronomeFunction = setInterval(metronomePlaySound, 60 / rate * 1000)
}

function metronomePlaySound() {
    metronomeSound.currentTime = 0;
    metronomeSound.play()
}

function onMetronomeStopButton() {
    metronome.disabled = false;
    clearInterval(metronomeFunction)
    switchButtonToMetronomeStartButton()
}

function switchButtonToMetronomeStopButton() {
    metronomeStartButton.classList.remove("visible")
    metronomeStopButton.classList.add("visible")
}

function switchButtonToMetronomeStartButton() {
    metronomeStartButton.classList.add("visible")
    metronomeStopButton.classList.remove("visible")
}