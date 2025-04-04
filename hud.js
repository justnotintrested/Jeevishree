
const canvas = document.getElementById("hudCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawHUD() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Radar circles
  ctx.strokeStyle = "rgba(0, 255, 204, 0.3)";
  ctx.lineWidth = 1;
  for (let r = 100; r <= 400; r += 100) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, r, 0, 2 * Math.PI);
    ctx.stroke();
  }

  // Crosshairs
  ctx.strokeStyle = "rgba(0, 255, 204, 0.5)";
  ctx.beginPath();
  ctx.moveTo(centerX - 20, centerY);
  ctx.lineTo(centerX + 20, centerY);
  ctx.moveTo(centerX, centerY - 20);
  ctx.lineTo(centerX, centerY + 20);
  ctx.stroke();

  // Rotating scanner line
  const angle = Date.now() / 300;
  const x = centerX + Math.cos(angle) * 400;
  const y = centerY + Math.sin(angle) * 400;
  ctx.strokeStyle = "rgba(0, 255, 204, 0.1)";
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(x, y);
  ctx.stroke();

  requestAnimationFrame(drawHUD);
}

drawHUD();
