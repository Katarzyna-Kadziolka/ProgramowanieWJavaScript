document.addEventListener("DOMContentLoaded", start)

let navigationButtons;
let stopButton;
let slideList;
let modal;
const photos = ["Bella1.jpg", "Bella2.jpg", "Bella3.jpg", "Bella4.jpg"]
function start() {
    navigationButtons = document.getElementsByClassName("navigation-buttons")

    const backButton = document.querySelector('#back-button')
    backButton.addEventListener("click", onBackButtonClick)
    const nextButton = document.querySelector('#next-button')
    nextButton.addEventListener("click", onNextButtonClick)
    stopButton = document.querySelector('#stop-button')
    stopButton.addEventListener("click", onStopButtonClick)

    const radio1 = document.querySelector('#radio1')
    radio1.addEventListener("change", function() {
      onRadioChecked(1)
    })
    const radio2 = document.querySelector('#radio2')
    radio2.addEventListener("change", function() {
      onRadioChecked(2)
    })
    const radio3 = document.querySelector('#radio3')
    radio3.addEventListener("change", function() {
      onRadioChecked(3)
    })
    const radio4 = document.querySelector('#radio4')
    radio4.addEventListener("change", function() {
      onRadioChecked(4)
    })

    const animationChangerButton = document.querySelector('#animation-changer-button')
    animationChangerButton.addEventListener("click", onAnimationChangerButtonClick)

    slideList = document.getElementsByClassName("slide")
    for(item of slideList) {
      item.addEventListener("click", onSlideClick)
    }

    modal = document.getElementsByClassName("modal")[0]
    const modalCloseButton = modal.getElementsByClassName("close")[0]
    modalCloseButton.addEventListener("click", onCloseButtonClick)

    window.addEventListener("click", onWindowClick)
}

let counter = 0;


function setImage() {
  if(counter > 4) {
    counter = 1
  }
  if(isFade) {
    changeFadeImage()
  } 
  document.getElementById('radio' + counter).checked = true
}

function replaySlaides() {
    intervalRef = setInterval(function() {
      counter++
      setImage()
    }, 3000)
}

let intervalRef = setInterval(function() {
  counter++
  setImage()
}, 3000)

function onBackButtonClick() {
  if(counter > 1) {
    counter --
    setImage()
    clearInterval(intervalRef)
    replaySlaides()
  }
}

function onNextButtonClick() {
  counter++
  setImage()
  clearInterval(intervalRef)
  replaySlaides()
}

function onStopButtonClick() {
  if(stopButton.textContent == "Stop") {
    clearInterval(intervalRef)
    stopButton.textContent = "Play"
  }
  else {
    replaySlaides()
    stopButton.textContent = "Stop"
  }
}

function onRadioChecked(value) {
  counter = +value
  setImage()
  clearInterval(intervalRef)
  replaySlaides()
}

let isFade = false
function onAnimationChangerButtonClick() {
  clearInterval(intervalRef)
  if(isFade) {
    for(let item of slideList) {
      item.className = "slide"
    }
    slideList[0].classList.add("first")
    isFade = false
  }
  else {
    for(let item of slideList) {
      item.className = "slide fade fade-slide"
    }
    slideList[counter-1].classList.add("first-slide")
    isFade = true
  }
  replaySlaides()
}

function changeFadeImage() {
  for(let item of slideList) {
    item.classList.remove("first-slide")
  }
  slideList[counter-1].classList.add("first-slide")
}

function onSlideClick() {
  clearInterval(intervalRef)
  modal.classList.remove("modal-unvisible")
  modal.classList.add("modal-visible")
  const modalImg = modal.getElementsByClassName("modal-img")[0]
  const bigImg = document.createElement('img')
  bigImg.src = photos[counter-1]
  modalImg.appendChild(bigImg)
}

function removeChildrenFromModalImg() {
  const modalImg = modal.getElementsByClassName("modal-img")[0]
  let lastChild = modalImg.lastElementChild
  while(lastChild) {
    modalImg.removeChild(lastChild);
    lastChild = modalImg.lastElementChild
  }
}

function onCloseButtonClick() {
  modal.classList.remove("modal-visible")
  modal.classList.add("modal-unvisible")
  removeChildrenFromModalImg()
  replaySlaides()
}

function onWindowClick(event) {
  if(event.target == modal) {
    modal.classList.remove("modal-visible")
    modal.classList.add("modal-unvisible")
    removeChildrenFromModalImg()
    replaySlaides()
  }
}