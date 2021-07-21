//Kumpulan Fungsi

//Fungsi untuk mendefinisikan titik
function gambar_titik(imageDataTemp, x, y, r, g, b) {
    let indeks;
    indeks = 4 * (x + (y * canvasKita.width));
    imageDataTemp.data[indeks + 0] = r;
    imageDataTemp.data[indeks + 1] = g;
    imageDataTemp.data[indeks + 2] = b;
    imageDataTemp.data[indeks + 3] = 255;
}

//Fungsi untuk mendefinisikan DDA
function dda(imageData, x1, y1, x2, y2, r, g, b) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    if (Math.abs(dx) > Math.abs(dy)) {
        // Penambahan pada sumbu x
        let y = y1;
        if (x2 > x1) {
            // Bergerak ke kanan
            for (let x = x1; x < x2; x++) {
                y = y + dy / Math.abs(dx);
                gambar_titik(imageData, Math.ceil(x), Math.ceil(y), r
                    , g, b);
            }
        } else {
            // Bergerak ke kiri
            for (let x = x1; x > x2; x--) {
                y = y + dy / Math.abs(dx);
                gambar_titik(imageData, Math.ceil(x), Math.ceil(y), r
                    , g, b);
            }
        }
    }
    else {
        // Penambahan pada sumbu y
        let x = x1;
        if (y2 > y1) {
            // Bergerak ke bawah
            for (let y = y1; y < y2; y++) {
                x = x + dx / Math.abs(dy);
                gambar_titik(imageData, Math.ceil(x), Math.ceil(y), r
                    , g, b);
            }
        } else {
            // Bergerak ke atas
            for (let y = y1; y > y2; y--) {
                x = x + dx / Math.abs(dy);
                gambar_titik(imageData, Math.ceil(x), Math.ceil(y), r
                    , g, b);
            }
        }
    }
}


//Fungsi untuk mengambar sebuah bangun Polygon
function polygon(imageDataTemp, point_array, r, g, b) {
    let point = point_array[0];
    for (let i = 1; i < point_array.length; i++) {
        let point2 = point_array[i];
        dda(imageDataTemp, point.x, point.y, point2.x, point2.y, r, g, b);
        point = point2;
    }
    dda(imageDataTemp, point.x, point.y, point_array[0].x, point_array[0].y, r, g, b);
}

//Fungsi untuk menggambar sebuah lingkaran
function lingkaran(imageDataTemp, xc, yc, radius, r, g, b) {
    for (let theta = 0; theta < Math.PI*2; theta += 0.0001) {
        x = xc + radius * Math.cos(theta);
        y = yc + radius * Math.sin(theta);

        gambar_titik(imageDataTemp, Math.ceil(x), Math.ceil(y), r, g, b);
    }
}

//Fungsi untuk menggambar sebuah elips
function elips(imageDataTemp, xc, yc, radiusX, radiusY, r, g, b) {
    for (let theta = 0; theta < Math.PI*2; theta += 0.01) {
        x = xc + radiusX * Math.cos(theta);
        y = yc + radiusY * Math.sin(theta);
        gambar_titik(imageDataTemp, Math.ceil(x), Math.ceil(y), r, g, b);
    }
}

//fungsi untuk membuat translasi
function translasi(titikLama, T){
    let x_baru = titikLama.x + T.x;
    let y_baru = titikLama.y + T.y;

    return {x:x_baru, y:y_baru};
}

//fungsi untuk membuat skala
function skala(titikLama, S){
    let x_baru = titikLama.x * S.x;
    let y_baru = titikLama.y * S.y;

    return {x:x_baru, y:y_baru};
}

//fungsi rotasi dengan native javascript
function rotasi(titikLama, sudut){
    let x_baru = titikLama.x * Math.cos(sudut) - titikLama.y * Math.sin(sudut);
    let y_baru = titikLama.x * Math.sin(sudut) + titikLama.y * Math.cos(sudut);

    return {x:x_baru, y:y_baru};
}

//fungsi rotasi dengan berdasarkan titik custom native javascript
function rotasiFP(titikLama, titikPutar, sudut){
    let p1 = translasi(titikLama, {x: -titikPutar.x, y: -titikPutar.y});
    let p2 = rotasi(p1, sudut);
    let p3 = translasi(p2, titikPutar);
 
     return p3;
 }

 //fungsi skala dengan berdasarkan titik custom native javascript
 function skalaFP(titikLama, titikPusat, S){
    let p1 = translasi(titikLama, {x: - titikPusat.x, y: - titikPusat.y});
    let p2 = skala(p1, S);
    let p3 = translasi(p2, titikPusat);
     return p3;
 }
 
 //fungsi untuk membuat translasi array
 function translasiArray(arrayTitik, T){
    let arrayHasil = [];
    for(let i=0; i<arrayTitik.length; i++) {
     let temp = translasi(arrayTitik[i], T);
     arrayHasil.push(temp);
    }
     return arrayHasil;
 }

 //fungsi untuk membuat rotasi dengan translasi array
 function rotasiArray(arrayTitik, titikPusat, sudut){
    let arrayHasil = [];
    for(let i=0; i<arrayTitik.length; i++) {
     let temp = rotasiFP(arrayTitik[i], titikPusat, sudut);
     arrayHasil.push(temp);
    }
     return arrayHasil;
 }

 //fungsi untuk membuat skala dengan translasi array
 function skalaArray(arrayTitik, titikPusat, S){
    let arrayHasil = [];
    for(let i=0; i<arrayTitik.length; i++) {
     let temp = skalaFP(arrayTitik[i], titikPusat, S);
     arrayHasil.push(temp);
    }
     return arrayHasil;
 }



const canvasKita6 = document.querySelector('#balapan');
const ctx6 = canvasKita6.getContext('2d');
const imageData2 = ctx6.getImageData
(0, 0, canvasKita6.width, canvasKita6.height);


        let x = 0;
        function animasi() {
            ctx6.save();
            ctx6.clearRect(0, 0, canvasKita6.width, canvasKita6.height);
            ctx6.fillStyle = 'orange';
            ctx6.fillRect(x - 2000, 170, 2000, 100);
            x++;
            
            ctx6.restore();
        }
        setInterval(animasi, 500);


                let pointArray7 = [
            { x: 100, y: 100 },
            { x: 150, y: 150 },
            { x: 50, y: 150 }
        ];

        polygon(imageData2, pointArray7, 255, 0, 0);

        let pointArray2 = [];
        let temp = skala(pointArray7[0], { x: 2, y: 2 });
        pointArray2.push(temp);
        temp = skala(pointArray7[1], { x: 2, y: 2 });
        pointArray2.push(temp);
        temp = skala(pointArray7[2], { x: 2, y: 2 });
        pointArray2.push(temp);

        polygon(imageData2, pointArray7, 0, 0, 255);

        ctx6.putImageData(imageData2, 0, 0);

        var imageSrc3 = new Image();
        imageSrc3.src = 'spongPants.png';
        imageSrc3.onload = function () {
            ctx6.drawImage(imageSrc3, 350, 290, 200, 70); 
        }

        
        



        

