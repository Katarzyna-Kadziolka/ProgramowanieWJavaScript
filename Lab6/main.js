document.addEventListener("DOMContentLoaded", start)

let canvas
let ctx
const canvaWidth = 1200
const canvaHeigh = 500
const circles = new Array();
const radius = 20 
const startAngle = 0 
const endAngle = Math.PI * 2 
let x = 600 
let y = 250
let dx = 2
let dy = 4

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

    createCircle()
    animate();
  
}

const createCircle = () => {
    ctx.beginPath()

    circles.push({
        x: x,
        y: y,
    })

    ctx.arc(x, y, radius, startAngle, endAngle)

    ctx.fillStyle = "#FFA500"
    ctx.fill()
    ctx.save()
}

const updatePosition = () => {
    x += dx
    y += dy

    if (x + radius > canvas.width || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > canvas.height || y - radius < 0) {
        dy = -dy;
    }
}

const animate = () => {
    ctx.clearRect(0, 0, canvaWidth, canvaHeigh);
    createCircle(ctx);
    updatePosition(20, 20);
    requestAnimationFrame(animate);
}
