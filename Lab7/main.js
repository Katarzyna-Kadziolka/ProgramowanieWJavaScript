document.addEventListener("DOMContentLoaded", start)

let addButton
let weatherInfos = []

function start() {
    addButton = document.querySelector('#addButton')
    addButton.addEventListener("click", onAddButtonClick)
    const saveButton = document.querySelector('#save-button')
    saveButton.addEventListener("click", save)

    load()
}

const cityName = 'London';
const key = '908d7a4b33c9430baa0d5f75a374e8ab'
const url = `http://api.openweathermap.org/data/3.0/onecall?`;

const getCoordinates = (cityName) => {
    return fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=' + key)  
    .then(function(resp) { return resp.json() })
    .then(function(data) {
      return {
        longitude: data[0].lon,
        latitiude: data[0].lat
      }
    })
    .catch(function() {
    });
}

const getData = (lat, lon) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)  
    .then(function(resp) { return resp.json() })
    .then(function(data) {
      return data;
    })
    .catch(function() {
    });
  }


const onAddButtonClick = () => {
    const selectCity = document.querySelector('#city')
    const cityName = selectCity.value
    weatherInfos.push(cityName)
    addNewCard(cityName, weatherInfos.length)
    handleButtonState()
}

const addNewCard = async (cityName, index) => {
    const coordinate = await getCoordinates(cityName)
    const response = await getData(coordinate.latitiude, coordinate.longitude)
    const weatherInfo = new WheatherInfo()
    weatherInfo.City = cityName
    weatherInfo.Temperature = response.main.temp
    weatherInfo.Humidity = response.main.humidity
    weatherInfo.Main = response.weather[0].icon

    createCard(weatherInfo, index)
}

const createCard = (weatherInfo, index) => {
    const newCard = document.createElement('div')
    newCard.classList.add("note");
    newCard.innerHTML = `<div>
        <div class="note-header">
            <span id="city" class="city"></span>
        </div>
        <hr>
        <span id="temperature"></span><br>
        <span id="humidity"></span>
        <div>
            <img id="weatherImage" src="" alt="Weather">
        </div>
    </div>
        <div class="color-picker-container">
            <button id="delete-button" class="save-button">Delete</button>
        </div>`


    newCard.querySelector('#delete-button').addEventListener('click', () => deleteNote(index))

    newCard.querySelector('#city').textContent = weatherInfo.City
    newCard.querySelector('#temperature').textContent = 'Temperatura: ' + toCelcius(weatherInfo.Temperature) + '℃'
    newCard.querySelector('#humidity').textContent = 'Wilgotność: ' + weatherInfo.Humidity + '%'

    newCard.querySelector("#weatherImage").src=`http://openweathermap.org/img/wn/${weatherInfo.Main}@2x.png`

    const main = document.getElementById('note-container')
    main.appendChild(newCard)

}

const toCelcius = (kelvinTemperature) => {
    return Math.round(kelvinTemperature - 272.15)
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

    for (let index = 0; index < weatherInfos.length; index++) {
        addNewCard(weatherInfos[index], index)
    }
}

const deleteNote = (index) => {
    weatherInfos.splice(index, 1)
    clearBoard()
    save()
    load()
    handleButtonState()
}

const clearBoard = () => {
    const main = document.getElementById('note-container')
    main.textContent = ''
}

const onWeatherInfosPush = () => {
    handleButtonState()
}

const handleButtonState = () => {
    if(weatherInfos.length == 10) {
        addButton.disabled = true
    }
    else {
        addButton.disabled = false
    }
}

class WheatherInfo {
    City = ''
    Temperature = 0
    Humidity = 0
    Main = ''
}