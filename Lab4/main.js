document.addEventListener("DOMContentLoaded", start)

function start() {
    const addButton = document.querySelector('#addButton')
    addButton.addEventListener("click", onAddButtonClick)
    const saveButton = document.querySelector('#save-button')
    saveButton.addEventListener("click", save)

    load()
}

const onAddButtonClick = () => {
    addNewCard()
}

let notes = []
const addNewCard = () => {
    const note = new Note()
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    note.Date = today.toDateString()
    createCard(note, notes.length)
    notes.push(note)
}

const createCard = (note, index) => {
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
            <button id="delete-button" class="save-button">Delete</button>
            <input id="color" type="color" class="color-picker"></input>
        </div>`


    newCard.querySelector('#title').addEventListener('change', (e) => note.Title = e.target.value)
    newCard.querySelector('#pin').addEventListener('change', (e) => onPinClick(e, note))
    newCard.querySelector('#contetnt').addEventListener('change', (e) => note.Content = e.target.value)
    newCard.querySelector('#color').addEventListener('change', (e) => note.Color = e.target.value)
    newCard.querySelector('#delete-button').addEventListener('click', () => deleteNote(index))
    
    newCard.querySelector('#date').value = note.Date
    newCard.querySelector('#title').value = note.Title
    newCard.querySelector('#pin').value = note.IsPinned
    newCard.querySelector('#contetnt').value = note.Content
    newCard.querySelector('#color').value = note.Color

    if(note.IsPinned) {
        newCard.querySelector('#pin').checked = true
    }
    newCard.style.background = note.Color
    newCard.style.borderColor = AddColor(note.Color, -5) 
    newCard.querySelector('#title').style.background = note.Color
    newCard.querySelector('#contetnt').style.background = note.Color
    newCard.querySelector('#delete-button').style.background = AddColor(note.Color, 5)
    newCard.querySelector('#delete-button').style.borderColor = AddColor(note.Color, -5) 


    const main = document.getElementById('note-container')
    main.appendChild(newCard)

}

const AddColor = (color, value) => {
    colorWithoutHash = color.replace("#", '')
    const r = clamp(parseInt(colorWithoutHash.substring(0, 1)) + value, min, max) 
    const g = clamp(parseInt(colorWithoutHash.substring(2, 3)) + value, min, max) 
    const b = clamp(parseInt(colorWithoutHash.substring(4, 5), 16) + value, min, max) 
    return "#" + r.toString(16) + g.toString(16) + b.toString(16)
}

const min = 0;
const max = 255;

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const onPinClick = (e, note) => {
    note.IsPinned = e.target.checked
    sortNotes()
    clearBoard()
    save()
    load()
}

const sortNotes = () => {
    notes.sort((a, b) => {
        if(a.IsPinned && b.IsPinned) return 0
        if(a.IsPinned) return -1
        return 1
    })
}

const save = () => {
    localStorage.setItem("notes", JSON.stringify(notes))
    console.log(localStorage)
}

const load = () => {
    savedNotes = JSON.parse(localStorage.getItem("notes"))
    if(!savedNotes) {
        return
    }
    notes = savedNotes
    sortNotes()
    //console.log(notes)
    let index = 0
    for (const note of notes) {
        createCard(note, index)
        index++;
    }
}

const deleteNote = (index) => {
    notes.splice(index, 1)
    clearBoard()
    save()
    load()
}

const clearBoard = () => {
    const main = document.getElementById('note-container')
    main.textContent = ''
}

class Note {
    Title = ''
    Date = ''
    Content = ''
    IsPinned = false
    Color = '#cce6ff'
}