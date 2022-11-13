document.addEventListener("DOMContentLoaded", start)

function start() {
    const addButton = document.querySelector('#addButton')
    addButton.addEventListener("click", onAddButtonClick)

}

const onAddButtonClick = () => {
    const newCard = document.createElement('note-card') 
    const main = document.getElementById('mainContainer')
    console.log(main)
    main.appendChild(newCard)
}
