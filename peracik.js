const canvasKita = document.querySelector('#myCanvas');
const ctx = canvasKita.getContext('2d');
const imageData = ctx.getImageData(0, 0, canvasKita.width, canvasKita.height);



// -------------------------------------------------------------------


// Objek DDA

//garis pemisah dengan warna yang berbeda
let x1 = 250;    let x2 = 450;    let y1 = 400;    let y2 = 170;
    dda(imageData, x1,y1, x2,y1, 0,255,0)
    dda(imageData, x2,y1, x2,y2, 255,255,0)
    dda(imageData, x2,y2, x1,y2, 255,0,0)
    dda(imageData, x1,y2, x1,y1, 0,0,255)


// //tag canvas untuk membuat setengah lingkaran dengan warna nya


// -------------------------------------------------------------------


// Objek Floodfill

let pointArray = [
    { x: 420, y: 100 },
    { x: 350, y: 135 },
    { x: 370, y: 160 },
    { x: 320, y: 145 },
    { x: 300, y: 130 },
];
polygon(imageData, pointArray, 255, 0, 0);
floodFill(imageData, canvasKita, 360,150, {r:0,g:0,b:0}, 
{r:0,g:255,b:255});

ctx.putImageData(imageData, 0, 0);


// -------------------------------------------------------------------


// Objek Build in beserta atribut objek primitive nya


ctx.arc(350, 300, 100, 0, Math.PI, false);
ctx.fillStyle = '#33ccff';
ctx.fill();

ctx.arc(350, 100, 100, 0, Math.PI, false);
ctx.fill();


//meload multi image

        //membuat objek data gambar
        var sources = {
            kanan: 'https://i.ibb.co/GR4bRb6/kiri.png',
            kiri: 'https://i.ibb.co/tMv5SgK/kanan.png',
            frame: 'https://i.ibb.co/XxrxQj8/imageedit-1-5672858200.png',
            frameall: 'https://i.ibb.co/WB504F9/MANTABG.png'

        };

        //memanggil fungsi loadImages
        loadImages(sources, function (images) {
            ctx.drawImage(images.kanan, 100, 190, 150, 190);
            ctx.drawImage(images.kiri, 452, 190, 150, 190);
            ctx.drawImage(images.frame, 257, 400, 180, 100);
            ctx.drawImage(images.frameall, 5, -360, 703, 1300);
        });

//membuat font

        ctx.font = 'bold italic 40pt Times';
        ctx.fillStyle = '#3399ff';
        ctx.textAlign = 'center'; //left, center, right //posisi font
        ctx.fillText('Yusuf', 345, 465, 200, 100);
