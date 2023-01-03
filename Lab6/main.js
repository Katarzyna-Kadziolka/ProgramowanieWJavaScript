document.addEventListener("DOMContentLoaded", start)

let canvas
let ctx
const canvaWidth = 1200
const canvaHeigh = 500
const circles = new Array();
const startAngle = 0 
const endAngle = Math.PI * 2 

function start() {
    const startButton = document.querySelector('#startButton')
    startButton.addEventListener("click", onStartClick)

}

const onStartClick = () => {
    canvas = document.getElementById('mainCanvas')
    if (!canvas.getContext) {
        throw new Error('Brak f. canvas.getContext')
    }
    ctx = canvas.getContext('2d')

    for (var i = 0; i < 10; i++) {
        const radius = Math.random() * 30 + 10
        let x = Math.random() * canvas.width
        let y = Math.random() * canvas.height
        while (x > canvas.width-radius || x < radius) {
            x = Math.random() * canvas.width
        }
        while (y > canvas.height-radius || y < radius) {
            y = Math.random() * canvas.height
        }
        
        let dx = Math.random() * 10
        let dy = Math.random() * 10
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
      }
    requestAnimationFrame(animate);
}
