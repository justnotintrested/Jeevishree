
const canvas = document.getElementById("skyCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let jets = [];
for (let i = 0; i < 40; i++) {
  jets.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 2 + Math.random() * 3,
    speed: 0.3 + Math.random() * 1.2,
    opacity: 0.3 + Math.random() * 0.5,
  });
}

function drawSky() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  jets.forEach(jet => {
    ctx.beginPath();
    ctx.arc(jet.x, jet.y, jet.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${jet.opacity})`;
    ctx.fill();
    jet.x += jet.speed;
    if (jet.x > canvas.width) {
      jet.x = 0;
      jet.y = Math.random() * canvas.height;
    }
  });
  requestAnimationFrame(drawSky);
}

drawSky();
