document.addEventListener("DOMContentLoaded", start)

let canvas
let ctx
const canvaWidth = 1200
const canvaHeigh = 500

function start() {
    const startButton = document.querySelector('#startButton')
    startButton.addEventListener("click", onStartClick)

}

const onStartClick = () => {
    canvas = document.getElementById('mainCanvas')
    if (!canvas.getContext) {
        throw new Error('Brak f. canvas.getContext');
    }
    ctx = canvas.getContext('2d');

    createCircle(ctx)

    
}

const createCircle = (ctx) => {
    ctx.beginPath()
    const x = 600 
    const y = 250 
    const radius = 20 
    const startAngle = 0 
    const endAngle = Math.PI * 2 

    ctx.arc(x, y, radius, startAngle, endAngle)

    ctx.fillStyle = "#FFA500"
    ctx.fill()
    ctx.save()
    
    circleAnimate()
}

const circleAnimate = () => {
    ctx.clearRect(0, 0, slide.width, slide.height);

}