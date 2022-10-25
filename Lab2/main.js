document.addEventListener("DOMContentLoaded", start)

let navigationButtons;
let stopButton;
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
}

// let slideIndex = 0;


// function showSlides() {
//   let i;
//   const slider = mainContainer.querySelector('#slider')
//   const slides = slider.querySelector('#slides')
//   let imgs = slides.querySelectorAll('img')
//   let dots = document.getElementsByClassName("dot");
// //   for (i = 0; i < imgs.length; i++) {
// //     imgs[i].style.display = "none";
// // //   }
//   slideIndex++;
//   if (slideIndex > imgs.length) {slideIndex = 1}
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
// //   imgs[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// function onLeftButtonClick() {

// }
// function onRightButtonClick() {
    
// }
// function onStopButtonClick() {
    
// }


// const timeoutRef = setTimeout( 
//     () => {
        
//     },
//     2000
// )
// let licznik = 0 
// const intervalRef = setInterval( 
//     () => {
//         main.innerHTML='From interval' + licznik++
//     },
//     2000
// )

// //kasujemy setInterval
// clearInterval(intervalRef)

// //kasujemy setTimeout
// clearTimeout(intervalRef)


// window.requestAnimationFrame()


let counter = 0;

function setImage() {
  if(counter > 4) {
    counter = 1
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
  console.log(value)
  counter = +value
  setImage()
  clearInterval(intervalRef)
  replaySlaides()
}