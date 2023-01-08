document.addEventListener("DOMContentLoaded", start)

function start() {
    const addButton = document.querySelector('#addButton')
    addButton.addEventListener("click", onAddButtonClick)
    const saveButton = document.querySelector('#save-button')
    saveButton.addEventListener("click", save)


    load()
}

const apiKey = '908d7a4b33c9430baa0d5f75a374e8ab';
const cityName = 'London';

const url = `http://api.openweathermap.org/geo/1.0/direct?limit=5&lang=pl&q=${cityName}&limit=10&appid=${apiKey}`;

const getData  = fetch (url, { headers: { 'Content-Type': 'application/json' } })
        .then(response => response.json())
        .then(data => {
            data.forEach(city => {
            console.log(`City: ${city.name}, Country: ${city.country}`);
            });
        })
        .catch(error => console.error(error));


const onAddButtonClick = () => {
    addNewCard()
}

let weatherInfos = []
const addNewCard = () => {
    const response = getData()
    const weatherInfo = new WheatherInfo()
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    weatherInfo.LastUpdate = today.toDateString()
    createCard(weatherInfo, weatherInfos.length)
    weatherInfos.push(weatherInfo)
}

const createCard = (note, index) => {
    const newCard = document.createElement('div')
    newCard.classList.add("note");
    newCard.innerHTML = `<div>
        <div class="note-header">
            <span id="city" class="city"></span>
        </div>
        <span id="date" class="date"></span>
        <hr>
        <span id="temperature"></span>
        <span id="humidity"></span>
    </div>
        <div class="color-picker-container">
            <button id="delete-button" class="save-button">Delete</button>
        </div>`


    newCard.querySelector('#delete-button').addEventListener('click', () => deleteNote(index))
    
    newCard.querySelector('#date').value = note.Date

    const main = document.getElementById('note-container')
    main.appendChild(newCard)

}

const save = () => {
    localStorage.setItem("notes", JSON.stringify(weatherInfos))
    console.log(localStorage)
}

const load = () => {
    savedNotes = JSON.parse(localStorage.getItem("notes"))
    if(!savedNotes) {
        return
    }
    weatherInfos = savedNotes

    let index = 0
    for (const note of weatherInfos) {
        createCard(note, index)
        index++;
    }
}

const deleteNote = (index) => {
    weatherInfos.splice(index, 1)
    clearBoard()
    save()
    load()
}

const clearBoard = () => {
    const main = document.getElementById('note-container')
    main.textContent = ''
}

class WheatherInfo {
    City = ''
    LastUpdate = ''
    Temperature = 0
    Humidity = 0
    Main = ''
}