var THREE = require('three');

var renderer = new THREE.WebGLRenderer(),
    scene    = new THREE.Scene(),
    camera   = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100);

var box = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10),
  new THREE.MeshPhongMaterial()
);
scene.add(box);

var lightR = new THREE.PointLight(0xff0000, 1, 100);
lightR.position.set(-10, 20, 10);
var lightG = new THREE.PointLight(0x00ff00, 1, 100);
lightG.position.set( 10, 20, 10);
var lightB = new THREE.PointLight(0x0000ff, 1, 100);
lightB.position.set(  0, -20, 10);

scene.add(lightR);
scene.add(lightG);
scene.add(lightB);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.set(0,0, 50);

function render() {

  box.rotation.y += -Math.PI / 100;
  box.rotation.x +=  Math.PI / 100;
  box.rotation.z += -Math.PI / 100;

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}

render();
