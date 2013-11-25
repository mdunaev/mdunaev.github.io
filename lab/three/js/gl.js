var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

var geometry = new THREE.Geometry();
geometry.vertices.push( new THREE.Vector3( 0,  0, 0));
geometry.vertices.push( new THREE.Vector3( 1, 1, 0));

var material = new THREE.LineBasicMaterial({color:0xFF0000});

var line = new THREE.Line(geometry, material);
line.dynamic = true;
scene.add(line);


camera.position.z = 1;

function render(){
    requestAnimationFrame(render);
    renderer.render(scene, camera);    
}

/*$(renderer.domElement).mousemove(function(e){
    line.geometry.vertices[1].y = -e.pageY/100;
    line.geometry.verticesNeedUpdate = true;
    console.log(e.pageY);
})*/
render();