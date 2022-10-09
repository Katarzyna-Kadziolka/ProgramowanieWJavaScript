document.addEventListener("DOMContentLoaded", start)
let inputs
let mainContainer

function start() {
    const addButton = document.querySelector('#addButton')
    addButton.addEventListener("click", onAddClick)
    const removeButton = document.querySelector('#removeButton')
    removeButton.addEventListener("click", onRemoveClick)
    inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        input.addEventListener('input', calculate)
    });
    mainContainer = document.querySelector('main')
}

function sum() {
    let sum = 0
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].value !== "") {
           sum = sum + parseInt(inputs[i].value) 
        }
    }
    const text = document.querySelector('#sum')
    text.innerText = `Suma: ${sum}`
}

function average() {
    let sum = 0
    let numberOfNumbers = 0
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].value !== "") {
           sum = sum + parseInt(inputs[i].value)
           numberOfNumbers ++ 
        }
    }
    
    const average = sum / numberOfNumbers
    const text = document.querySelector('#average')
    text.innerText = `Average: ${average}`
}

function min() {
    let min = inputs[0].value
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].value !== "" && min > inputs[i].value) {
            min = inputs[i].value
        }
    }
    const text = document.querySelector('#min')
    text.innerText = `Min: ${min}`
}

function max() {
    let max = inputs[0].value
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].value !== "" && max < inputs[i].value) {
            max = inputs[i].value
        }
    }
    const text = document.querySelector('#max')
    text.innerText = `Max: ${max}`
}

function calculate() {
    sum()
    average()
    min()
    max()
}

function onAddClick() {
    const newInput = document.createElement('input')
    newInput.type = 'number'
    newInput.classList.add("container")
    newInput.classList.add("input")
    newInput.addEventListener('input', calculate)
    mainContainer.appendChild(newInput)
    inputs = document.querySelectorAll('input')
}

function onRemoveClick() {
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].value === "") {
            inputs[i].parentNode.removeChild(inputs[i])
        }
    }
    inputs = document.querySelectorAll('input')
}
