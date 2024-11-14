// Matrix effect script
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

let context = canvas.getContext('2d');
let width, height;
let matrixCharacters = [];
const characterSize = 20;
let columns;

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / characterSize);
    matrixCharacters = [];
    for (let x = 0; x < columns; x++) {
        matrixCharacters[x] = Math.floor(Math.random() * height);
    }
}

function drawMatrixEffect() {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, width, height);

    context.fillStyle = '#0F0';
    context.font = characterSize + 'px monospace';

    for (let i = 0; i < matrixCharacters.length; i++) {
        const text = String.fromCharCode(Math.random() * 128);
        const x = i * characterSize;
        const y = matrixCharacters[i] * characterSize;

        context.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
            matrixCharacters[i] = 0;
        }
        matrixCharacters[i]++;
    }
}

let matrixInterval;

function startMatrixEffect() {
    resizeCanvas();
    if (!matrixInterval) {
        matrixInterval = setInterval(drawMatrixEffect, 70);
    }
}

function stopMatrixEffect() {
    clearInterval(matrixInterval);
    matrixInterval = null;
}

window.addEventListener('resize', resizeCanvas);

document.getElementById('startMatrix').addEventListener('click', () => {
    if (matrixInterval) {
        stopMatrixEffect();
    } else {
        startMatrixEffect();
    }
});
