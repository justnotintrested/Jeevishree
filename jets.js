
const canvas = document.getElementById("jetCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let jets = [];
for (let i = 0; i < 30; i++) {
  jets.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 2 + Math.random() * 3,
    speed: 0.5 + Math.random(),
  });
}

function drawJets() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#8a2be2";
  jets.forEach(jet => {
    ctx.beginPath();
    ctx.arc(jet.x, jet.y, jet.size, 0, Math.PI * 2);
    ctx.fill();
    jet.x += jet.speed;
    if (jet.x > canvas.width) {
      jet.x = 0;
      jet.y = Math.random() * canvas.height;
    }
  });
  requestAnimationFrame(drawJets);
}

drawJets();
