document.addEventListener("DOMContentLoaded", start)

let canvas;
let ctx;

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
    ctx.beginPath();
    const x = 600; // x coordinate
    const y = 250; // y coordinate
    const radius = 20; // Arc radius
    const startAngle = 0; // Starting point on circle
    const endAngle = Math.PI * 2; // End point on circle

    ctx.arc(x, y, radius, startAngle, endAngle);

    ctx.fillStyle = "#FFA500"
    ctx.fill();
}