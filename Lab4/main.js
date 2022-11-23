document.addEventListener("DOMContentLoaded", start)

function start() {
    const addButton = document.querySelector('#addButton')
    addButton.addEventListener("click", onAddButtonClick)
    const saveButton = document.querySelector('#save-button')
    saveButton.addEventListener("click", save)
}

const onAddButtonClick = () => {
    addNewNoteCard()
}

const notes = []
const addNewNoteCard = () => {
    const newCard = document.createElement('div')
    newCard.classList.add("note");
    newCard.innerHTML = `<div>
        <div class="note-header">
            <input id="title" class="title"placeholder="Title"></input>
            <input id="pin" name="pin" type="checkbox" /> 
        </div>
        <span id="date" class="date"></span>
        <hr>
        <textarea id="contetnt" class="content"></textarea>
    </div>
        <div class="color-picker-container">
            <input id="color" type="color" class="color-picker"></input>
        </div>`

    const note = new Note()
    note.Date = Date.now()
    newCard.querySelector('#title').addEventListener('change', (e) => note.Title = e.target.value)
    newCard.querySelector('#pin').addEventListener('change', (e) => note.IsPinned = e.target.value)
    newCard.querySelector('#contetnt').addEventListener('change', (e) => note.Content = e.target.value)
    newCard.querySelector('#color').addEventListener('change', (e) => note.Color = e.target.value)
    newCard.querySelector('#date').innerHTML = note.Date.toString()

    notes.push(note)
    const main = document.getElementById('mainContainer')
    main.appendChild(newCard)

}

const onPinClick = () => {
    console.log(notes[0])
}

const save = () => {
    console.log(notes)
}

class Note {
    Title = ''
    Date = ''
    Content = ''
    IsPinned = false
    Color = '#cce6ff'
}