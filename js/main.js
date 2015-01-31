var THREE = require('three'),
    World = require('three-world'),
    OBJMTLLoader = require('./OBJMTLLoader');

World.init({camDistance: 100, renderCallback: render});

var box = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10),
  new THREE.MeshPhongMaterial({metal: true, shininess: 1000})
);
World.add(box);

var loader = new OBJMTLLoader();
var ship = undefined;

loader.load("models/Feisar_Ship.obj",
  "models/Feisar_Ship.mtl", function(obj3d) {
  window.thing = obj3d;
  obj3d.scale.set(0.25, 0.25, 0.25);
  World.add(obj3d);
  ship = obj3d;
});
/*
var lightR = new THREE.PointLight(0xff0000, 1, 100);
lightR.position.set(-10, 20, 10);
var lightG = new THREE.PointLight(0x00ff00, 1, 100);
lightG.position.set( 10, 20, 10);
var lightB = new THREE.PointLight(0x0000ff, 1, 100);
lightB.position.set(  0, -20, 10);

World.add(lightR);
World.add(lightG);
World.add(lightB);
*/

function render() {
  box.rotation.y += -Math.PI / 1000;
  box.rotation.x +=  Math.PI / 1000;
//  box.rotation.z += -Math.PI / 100;
  if(ship) ship.rotation.y += Math.PI / 100;
}

World.start();
console.log("Ready");
