const canvasKita = document.querySelector('#motif');
const ctx = canvasKita.getContext('2d');



var gradient = ctx.createLinearGradient(0, 0, canvasKita.width, 0);

gradient.addColorStop("0", " gray");
gradient.addColorStop("0.5", "yellow");
gradient.addColorStop("1.0", "white");

ctx.font = 'bold italic 50pt Times';
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
ctx.fillStyle = gradient;
ctx.fillText('Spongebob', 125, 130, 200, 100);

ctx.beginPath();
ctx.moveTo(110, 120); // kesamping kebawah  
ctx.lineTo(40, 160);
ctx.lineTo(110, 200);
ctx.lineTo(110, 168);
ctx.lineTo(300, 170);
ctx.lineTo(300, 155);
ctx.lineTo(110, 155);
ctx.lineTo(110, 120);
ctx.stroke();
ctx.fillStyle = 'rgba(,255,,1)';
ctx.fill();


