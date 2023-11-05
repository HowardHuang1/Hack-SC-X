const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

// Set up the Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
camera.position.set(0, 0, 10);

// Set up the GLB model
const glbModel = new THREE.GLTFLoader().parse('C:/Users/rahul/OneDrive/Desktop/image_database/tree.glb');
glbModel.scene.rotation.x += Math.PI / 2;
glbModel.scene.position.y += 1;
scene.add(glbModel.scene);

// Set up the lights
const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Set up the renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
  antialias: true,
});
renderer.setSize(canvas.width, canvas.height);
renderer.render(scene, camera);

// Handle user interactions
document.addEventListener('mousemove', onDocumentMouseMove);
document.addEventListener('click', onDocumentClick);

function onDocumentMouseMove(event) {
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / canvas.width) * 2 - 1;
  mouse.y = -(event.clientY / canvas.height) * 2 + 1;
  camera.rotation.y += mouse.x * 0.1;
  camera.rotation.x += mouse.y * 0.1;
  renderer.render(scene, camera);
}

function onDocumentClick(event) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / canvas.width) * 2 - 1;
  mouse.y = -(event.clientY / canvas.height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(glbModel.scene.children);
  if (intersects.length > 0) {
    const target = intersects[0].object;
    target.rotation.y += Math.PI;
    target.position.y += 1;
    scene.add(target);
    renderer.render(scene, camera);
  }
}