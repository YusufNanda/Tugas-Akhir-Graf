   
const myCanvas = document.getElementById('ball');
const ctx4 = myCanvas.getContext('2d');

/* 2. Mouse Click Bola memantul */
let raf, running = false;
let bola = {
    x: 100, y: 100, vx: 5, vy: 1, radius: 25, warna: 'yellow',
    draw: function(){
        ctx4.beginPath();
        ctx4.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        ctx4.closePath();
        ctx4.fillStyle = this.warna;
        ctx4.fill();
    }
};
function clear(){
    ctx4.fillStyle = 'rgba(204, 255, 255, 0.3)';
    ctx4.fillRect(0,0,myCanvas.width, myCanvas.height);
}
function draw(){
    clear();
    bola.draw();
    bola.x += bola.vx; bola.y += bola.vy;
    if(bola.y + bola.vy > myCanvas.height || bola.y + bola.vy < 0){
        bola.vy = -bola.vy;
    }
    if(bola.x + bola.vx > myCanvas.width || bola.x + bola.vx < 0){
        bola.vx = -bola.vx;
    }
    raf = window.requestAnimationFrame(draw);
}

myCanvas.addEventListener('click', function(e){
    if(!running){
        raf = window.requestAnimationFrame(draw);
        running = true;
    } else {
        raf = window.requestAnimationFrame(draw);
        running = true; 
    }
});
myCanvas.addEventListener('mouseout', function(e){
    window.cancelAnimationFrame(raf);
    running = false;
});

bola.draw();

                ctx4.font = 'bold italic 50pt Times';
                ctx4.fillText('Klik 2x untuk menjalankan', 300, 250, 350, 100);
                



