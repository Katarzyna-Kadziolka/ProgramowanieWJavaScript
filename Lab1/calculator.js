document.addEventListener("DOMContentLoaded", start)
let inputs
let mainContainer

function start() {
    const button = document.querySelector('#calculateButton')
    button.addEventListener("click", onClick)
    inputs = document.querySelectorAll('input')
    mainContainer = document.querySelector('main')
}

function sum() {
    let sum = 0
    for (let i = 0; i < inputs.length; i++) {
        sum = sum + parseInt(inputs[i].value)
    }
    const text = document.querySelector('#sum')
    text.innerText = `Suma: ${sum}`
}

function average() {
    let sum = 0
    for (let i = 0; i < inputs.length; i++) {
        sum = sum + parseInt(inputs[i].value)
    }
    const average = sum / inputs.length
    const text = document.querySelector('#average')
    text.innerText = `Average: ${average}`
}

function min() {
    let min = inputs[0].value
    for (let i = 0; i < inputs.length; i++) {
        if(min > inputs[i].value) {
            min = inputs[i].value
        }
    }
    const text = document.querySelector('#min')
    text.innerText = `Min: ${min}`
}

function max() {
    let max = inputs[0].value
    for (let i = 0; i < inputs.length; i++) {
        if(max < inputs[i].value) {
            max = inputs[i].value
        }
    }
    const text = document.querySelector('#max')
    text.innerText = `Max: ${max}`
}

function onClick() {
    sum()
    average()
    min()
    max()
}
