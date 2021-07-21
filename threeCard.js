const width = window.innerWidth;
const height = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5);
const renderer = new THREE.WebGLRenderer({ antialias: true });
const loader = new THREE.TextureLoader();


const geometri = new THREE.PlaneGeometry(2, 2);
const material = new THREE.MeshBasicMaterial({  map: loader.load('spongCard2.png'), side: THREE.DoubleSide });


const geoSaya = new THREE.Mesh(geometri, material);
scene.add(geoSaya);
scene.background = new THREE.Color(0xffffff);

camera.position.z = 5;

renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

//mengatur agar ukuran tampilan menyesuaikan saat ukuran window berubah
window.addEventListener('resize', function () {
    renderer.setSize(width, height);
    camera.aspect = width, height;
    camera.updateProjectionMatrix();
});
function drawu() {
    geoSaya.rotation.x += 0.01;
    requestAnimationFrame(drawu);
    renderer.render(scene, camera);
}
drawu();