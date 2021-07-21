const canvasKita3 = document.querySelector('#motif2');
const ctx3 = canvasKita3.getContext('2d');



var gradient = ctx3.createLinearGradient(0, 0, canvasKita3.width, 0);

gradient.addColorStop("0", " gray");
gradient.addColorStop("0.5", "yellow");
gradient.addColorStop("1.0", "white");

ctx3.font = 'bold italic 50pt Times';
ctx3.shadowOffsetX = 2;
ctx3.shadowOffsetY = 2;
ctx3.shadowBlur = 2;
ctx3.shadowColor = 'rgba(255, 255, 255, 0.5)';
ctx3.fillStyle = gradient;
ctx3.fillText('Bola', 125, 130, 200, 100);

ctx3.beginPath();
ctx3.moveTo(110, 120); // kesamping kebawah  
ctx3.lineTo(40, 160);
ctx3.lineTo(110, 200);
ctx3.lineTo(110, 168);
ctx3.lineTo(300, 170);
ctx3.lineTo(300, 155);
ctx3.lineTo(110, 155);
ctx3.lineTo(110, 120);
ctx3.stroke();
ctx3.fillStyle = 'rgba(,255,,1)';
ctx3.fill();