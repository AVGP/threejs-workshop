var THREE = require('three'),
    World = require('three-world');

World.init({ambientLightColor: 0, camDistance: 100, renderCallback: render});

var box = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10),
  new THREE.MeshPhongMaterial({metal: true, shininess: 1000})
);
World.add(box);

var lightR = new THREE.PointLight(0xff0000, 1, 100);
lightR.position.set(-10, 20, 10);
var lightG = new THREE.PointLight(0x00ff00, 1, 100);
lightG.position.set( 10, 20, 10);
var lightB = new THREE.PointLight(0x0000ff, 1, 100);
lightB.position.set(  0, -20, 10);

World.add(lightR);
World.add(lightG);
World.add(lightB);

function render() {
  box.rotation.y += -Math.PI / 1000;
  box.rotation.x +=  Math.PI / 1000;
//  box.rotation.z += -Math.PI / 100;
}

World.start();
console.log("Ready");
