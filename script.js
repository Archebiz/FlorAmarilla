const canvas = document.getElementById('girasolCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
let angle=0;

function drawSunflower() {
    let h = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibuja el tallo verde
    ctx.fillStyle = "green";
    ctx.fillRect(centerX - 10, centerY, 20, 400);
    const radioXBase = 100;
    const radioYBase = 50;
    
    // Ángulo de rotación inicial en radianes
    const anguloInicial = 0;
    
    // Ángulo de rotación incremental en radianes
    const anguloIncremental = (Math.PI * 2) / 18;

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 18; j++) {
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = 'yellow';
            ctx.beginPath();
            const angulo = anguloInicial + i * anguloIncremental;
            const x = centerX;
            const y = centerY;
            
            ctx.ellipse(x, y, 150 - j * 6, radioYBase, angulo+angle, 0, Math.PI * 2);          
            ctx.lineWidth = 2; // Ancho del contorno
            ctx.stroke(); // Dibuja solo el contorno de la elipse
            
            ctx.closePath();
            
        }            
        angle+=0.0005;
    }
   
  // Establece el punto de origen en el centro del canvas
    
    // Dibuja el centro marrón
    ctx.fillStyle = "brown";
    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
    ctx.fill();
}

function animate() {
    requestAnimationFrame(animate);
    drawSunflower();
}

animate();
