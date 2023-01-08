document.addEventListener("DOMContentLoaded", start)

let canvas
let ctx
const canvaWidth = 1200
const canvaHeigh = 500
let circles = new Array()
const startAngle = 0 
const endAngle = Math.PI * 2 
let doAnimation = true
let numberOfCricles
let lineRange


function start() {
    const startButton = document.querySelector('#startButton')
    startButton.addEventListener("click", onStartClick)
    const resetButton = document.querySelector('#resetButton')
    resetButton.addEventListener("click", onResetClick)
    numberOfCricles = document.querySelector('#NumberOfCirclesRange')
    lineRange = document.querySelector('#RangeOfLine')
}

const onResetClick = () => {
    doAnimation = false
    circles = new Array()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

const onStartClick = () => {
    doAnimation = true
    canvas = document.getElementById('mainCanvas')
    if (!canvas.getContext) {
        throw new Error('Brak f. canvas.getContext')
    }
    ctx = canvas.getContext('2d')

    

    for (var i = 0; i < numberOfCricles.value; i++) {
        const radius = Math.random() * 30 + 10
        let x = Math.random() * canvas.width
        let y = Math.random() * canvas.height
        while (x > canvas.width-radius || x < radius) {
            x = Math.random() * canvas.width
        }
        while (y > canvas.height-radius || y < radius) {
            y = Math.random() * canvas.height
        }
        
        let dx = Math.random() * 5
        let dy = Math.random() * 5
        circles.push({x: x, y: y, radius: radius, dx: dx, dy: dy})
    }

    animate();
  
}

const drawCircle = (circle) => {
    ctx.beginPath()

    ctx.arc(circle.x, circle.y, circle.radius, startAngle, endAngle)

    ctx.fillStyle = "#FFA500"
    ctx.fill()
    ctx.save()
}

const drawLine = (circle1, circle2) => {
    ctx.beginPath();
    ctx.moveTo(circle1.x, circle1.y)
    ctx.lineTo(circle2.x, circle2.y)
    ctx.strokeStyle = "#FFA500"
    ctx.stroke()
}

const distance = (circle1, circle2) => {
    const distanceDifferenceX = circle1.x - circle2.x;
    const distanceDifferenceY = circle1.y - circle2.y;
    return Math.sqrt(distanceDifferenceX * distanceDifferenceX + distanceDifferenceY * distanceDifferenceY);
  }

const updatePosition = (circle) => {
    circle.x += circle.dx
    circle.y += circle.dy

    if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
        circle.dx = -circle.dx;
    }
    if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
        circle.dy = -circle.dy;
    }
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < circles.length; i++) {
        drawCircle(circles[i]);
        updatePosition(circles[i]);
        for (var j = 0; j < circles.length; j++) {
            if (i !== j && distance(circles[i], circles[j]) < lineRange.value) {
              drawLine(circles[i], circles[j]);
            }
        }
    }
    if (doAnimation) {
        requestAnimationFrame(animate);
    }
}
