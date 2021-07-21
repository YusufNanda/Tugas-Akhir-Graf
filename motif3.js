const canvasKita5 = document.querySelector('#motif3');
const ctx5 = canvasKita5.getContext('2d');



var gradient = ctx5.createLinearGradient(0, 0, canvasKita5.width, 0);

gradient.addColorStop("0", " gray");
gradient.addColorStop("0.5", "yellow");
gradient.addColorStop("1.0", "white");

ctx5.font = 'bold italic 50pt Times';
ctx5.shadowOffsetX = 2;
ctx5.shadowOffsetY = 2;
ctx5.shadowBlur = 2;
ctx5.shadowColor = 'rgba(255, 255, 255, 0.5)';
ctx5.fillStyle = gradient;
ctx5.fillText('Loading Bar', 125, 130, 200, 100);

ctx5.beginPath();
ctx5.moveTo(110, 120); // kesamping kebawah  
ctx5.lineTo(40, 160);
ctx5.lineTo(110, 200);
ctx5.lineTo(110, 168);
ctx5.lineTo(300, 170);
ctx5.lineTo(300, 155);
ctx5.lineTo(110, 155);
ctx5.lineTo(110, 120);
ctx5.stroke();
ctx5.fillStyle = 'rgba(,255,,1)';
ctx5.fill();