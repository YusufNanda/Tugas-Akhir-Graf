                    /* fungsi */
                    // Fungsi pembuatan titik
                    function gambar_titik(imageDataTemp, x, y, r, g, b) {
                        let indeks;
                        indeks = 4 * (x + (y * canvasKita2.width));
                        imageDataTemp.data[indeks + 0] = r;
                        imageDataTemp.data[indeks + 1] = g;
                        imageDataTemp.data[indeks + 2] = b;
                        imageDataTemp.data[indeks + 3] = 255; // alpha
                    }

                    /* Menggambar Garis dengan Algoritma DDA*/
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


                    /* Menggambar Polygon */
                    function polygon(imageDataTemp, point_array, r, g, b) {
                        let point = point_array[0];
                        for (let i = 1; i < point_array.length; i++) {
                            let point2 = point_array[i];
                            dda(imageDataTemp, point.x, point.y, point2.x, point2.y, r, g, b);
                            point = point2;
                        }
                        dda(imageDataTemp, point.x, point.y, point_array[0].x, point_array[0].y, r, g, b);
                    }



                    const canvasKita2 = document.querySelector('#spongebob');
                    const ctx2 = canvasKita2.getContext('2d');
                    const imageData = ctx2.getImageData
                        (0, 0, canvasKita2.width, canvasKita2.height);

                    //badan
                    for (let i = 0; i < 220; i++) {
                        for (let j = 0; j < 250; j++) {
                            gambar_titik(imageData, 290 + i, 50 + j, 241, 233, 12);

                        }
                    }
                    //celana
                    for (let i = 0; i < 220; i++) {
                        for (let j = 0; j < 70; j++) {

                            gambar_titik(imageData, 290 + i, 290 + j, 153, 102, 51);

                        }
                    }
                    //kaki
                    for (let i = 0; i < 20; i++) {
                        for (let j = 0; j < 230; j++) {
                            gambar_titik(imageData, 350 + i, 250 + j, 241, 233, 12);
                            gambar_titik(imageData, 430 + i, 250 + j, 241, 233, 12);
                        }
                    }
                    //sepatu
                    for (let i = 0; i < 20; i++) {
                        for (let j = 0; j < 40; j++) {
                            gambar_titik(imageData, 350 + i, 440 + j, 0, 0, 0);
                            gambar_titik(imageData, 430 + i, 440 + j, 0, 0, 0);
                        }
                    }
                    //lengan baju
                    for (let i = 0; i < 45; i++) {
                        for (let j = 0; j < 20; j++) {
                            gambar_titik(imageData, 245 + i, 200 + j, 153, 102, 51);
                            gambar_titik(imageData, 510 + i, 200 + j, 153, 102, 51);
                        }
                    }

                    //tangan
                    for (let i = 0; i < 20; i++) {
                        for (let j = 0; j < 110; j++) {
                            gambar_titik(imageData, 260 + i, 220 + j, 241, 233, 12);
                            gambar_titik(imageData, 520 + i, 220 + j, 241, 233, 12);
                            // gambar_titik(imageData, 245 + i, 200 + j, 153, 102, 51);
                            // gambar_titik(imageData, 510 + i, 200 + j, 153, 102, 51);
                        }
                    }

                    ctx2.putImageData(imageData, 0, 0);


                    var imageSrc2 = new Image();
                    imageSrc2.src = 'spongFace2.png';
                    imageSrc2.onload = function () {
                        ctx2.drawImage(imageSrc2, 300, 50, 200, 210); 
                    }

                    var imageSrc22 = new Image();
                    imageSrc22.src = 'spongPants.png';
                    imageSrc22.onload = function () {
                        ctx2.drawImage(imageSrc22, 300, 290, 200, 70); 
                    }

