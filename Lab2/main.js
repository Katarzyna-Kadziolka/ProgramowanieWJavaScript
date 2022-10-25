// document.addEventListener("DOMContentLoaded", start)

// let mainContainer;
// function start() {
//     mainContainer = document.querySelector('main')
//     const leftButton = document.querySelector('#leftButton')
//     leftButton.addEventListener("click", onLeftButtonClick)
//     const rightButton = document.querySelector('#rightButton')
//     rightButton.addEventListener("click", onRightButtonClick)
//     const stopButton = document.querySelector('#stopButton')
//     stopButton.addEventListener("click", onStopButtonClick)
//     showSlides();
// }

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


let counter = 1;

setInterval(function() {
  document.getElementById('radio' + counter).checked = true
  counter++
  if(counter > 4) {
    counter = 1
  }
}, 5000)