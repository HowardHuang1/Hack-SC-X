import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import * as dat from 'dat.gui'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

var camera, scene, renderer;

var objects = [];

init();
animate();

function init() {
    const nycURL = new URL('./assets/model-0-0.glb', import.meta.url);

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
    camera.position.z = 1;

    scene = new THREE.Scene();

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshNormalMaterial();

    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
		objects.push( mesh );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
		
		const orbitControls = new OrbitControls( camera, renderer.domElement );
		
		const dragControls = new DragControls( objects, camera, renderer.domElement );
		dragControls.addEventListener( 'dragstart', function () { orbitControls.enabled = false; } );
		dragControls.addEventListener( 'dragend', function () { orbitControls.enabled = true; } );

        const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);

        const planeGeometry = new THREE.PlaneGeometry(30, 30);
        const planeMaterial = new THREE.MeshBasicMaterial({
            color: 0xFFFFFF,
            side: THREE.DoubleSide
        });

        const boxGeometry = new THREE.BoxGeometry();
        const boxMaterial = new THREE.MeshStandardMaterial({
            color: 0x00FF00
        });
        const box = new THREE.Mesh(boxGeometry, boxMaterial);
        scene.add(box);

        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        scene.add(plane);
        plane.rotation.x = -0.5 * Math.PI;
        plane.receiveShadow = true;

        const gridHelper = new THREE.GridHelper(30);
        scene.add(gridHelper);

        const ambientLight = new THREE.AmbientLight(0x333333);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1.5);
        scene.add(directionalLight);
        directionalLight.position.set(-30, 50, 0);
        directionalLight.castShadow = true;
        directionalLight.shadow.camera.bottom = -12;

        const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
        scene.add(dLightHelper);

        const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
        scene.add(dLightShadowHelper);

        const assetLoader = new GLTFLoader();

        assetLoader.load(nycURL.href, function(gltf){
            const model = gltf.scene;
            scene.add(model);
            model.position.set(-100, -100, -100);
        }, undefined, function(error){
            console.error(error);
        });

        const gui = new dat.GUI();

        const options = {
            sphereColor: '#ffea00',
            wireframe: false,
            speed: 0.01
        };

        gui.addColor(options, 'sphereColor').onChange(function(e){
            sphere.material.color.set(e);
        });

        gui.add(options, 'wireframe').onChange(function(e){
            sphere.material.wireframe = e;
        });

        gui.add(options, 'speed', 0, 0.1);
}

function animate() {

    requestAnimationFrame( animate );
    renderer.render( scene, camera );

}

// import * as THREE from 'three';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
// import * as dat from 'dat.gui'
// import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';


// import laCity from './img/laCity.jpg';
// import laCity2 from './img/laCity2.jpg';

// const nycURL = new URL('./assets/model-0-0.glb', import.meta.url);

// const renderer = new THREE.WebGLRenderer();

// renderer.shadowMap.enabled = true;

// renderer.setSize(window.innerWidth, window.innerHeight);

// document.body.appendChild(renderer.domElement);

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// );

// const orbit = new OrbitControls(camera, renderer.domElement);

// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// camera.position.set(-10, 30, 30);
// orbit.update();

// const boxGeometry = new THREE.BoxGeometry();
// const boxMaterial = new THREE.MeshStandardMaterial({
//     color: 0x00FF00
// });
// const box = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(box);

// const planeGeometry = new THREE.PlaneGeometry(30, 30);
// const planeMaterial = new THREE.MeshBasicMaterial({
//     color: 0xFFFFFF,
//     side: THREE.DoubleSide
// });
// const plane = new THREE.Mesh(planeGeometry, planeMaterial);
// scene.add(plane);
// plane.rotation.x = -0.5 * Math.PI;
// plane.receiveShadow = true;

// const gridHelper = new THREE.GridHelper(30);
// scene.add(gridHelper);

// const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
// const sphereMaterial = new THREE.MeshStandardMaterial({
//     color: 0x0000FF,
//     wireframe: false
// });
// const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
// scene.add(sphere);
// sphere.position.set(-10, 10, 0);
// sphere.castShadow = true;

// const ambientLight = new THREE.AmbientLight(0x333333);
// scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1.5);
// scene.add(directionalLight);
// directionalLight.position.set(-30, 50, 0);
// directionalLight.castShadow = true;
// directionalLight.shadow.camera.bottom = -12;

// const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
// scene.add(dLightHelper);

// const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(dLightShadowHelper);

// const spotLight = new THREE.SpotLight(0xFFFFFF);
// scene.add(spotLight);
// spotLight.position.set(-100, 100, 0);
// spotLight.castShadow = true;

// const sLightHelper = new THREE.SpotLightHelper(spotLight, 5);
// scene.add(sLightHelper);

// // renderer.setClearColor(0xFFEA00);
// const textureLoader = new THREE.TextureLoader();
// // scene.background = textureLoader.load(laCity);
// const cubeTextureLoader = new THREE.CubeTextureLoader();
// scene.background = cubeTextureLoader.load([
//     laCity,
//     laCity2,
//     laCity,
//     laCity2,
//     laCity,
//     laCity2,
// ]);

// const box2Geometry = new THREE.BoxGeometry(4, 4, 4);
// const box2Material = new THREE.MeshBasicMaterial({color: 0x00FF00});
// const box2 = new THREE.Mesh(box2Geometry, box2Material);
// scene.add(box2);
// box2.position.set(0, 15, 10);

// const assetLoader = new GLTFLoader();

// assetLoader.load(nycURL.href, function(gltf){
//     const model = gltf.scene;
//     scene.add(model);
//     model.position.set(-100, -100, -100);
// }, undefined, function(error){
//     console.error(error);
// });

// const gui = new dat.GUI();

// const options = {
//     sphereColor: '#ffea00',
//     wireframe: false,
//     speed: 0.01
// };

// gui.addColor(options, 'sphereColor').onChange(function(e){
//     sphere.material.color.set(e);
// });

// gui.add(options, 'wireframe').onChange(function(e){
//     sphere.material.wireframe = e;
// });

// gui.add(options, 'speed', 0, 0.1);

// let step = 0;

// const mousePosition = new THREE.Vector2();

// window.addEventListener('mousemove', function(e) {
//     mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
//     mousePosition.y = - (e.clientY / window.innerHeight) * 2 + 1;
// });

// const rayCaster = new THREE.Raycaster();

// const sphereId = sphere.id;
// box2.name = 'theBox';

// ////////////////
// // var scene = new THREE.Scene();
// // scene.background = new THREE.Color (0xf0f0f0)
// // var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// // var renderer = new THREE.WebGLRenderer();
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // document.body.appendChild(renderer.domElement);

// // camera.position.z = 1000;
// var objects = [];
// var startColor;

// function init(){
//     var ambientLight = new THREE.AmbientLight(0x0f0f0f);
//     scene.add(ambientLight);

//     var light = new THREE.SpotLight(0xffffff, 1.5);
//     light.position.set(0, 500, 2000);

//     scene.add(light);

//     var geometry = new THREE.SphereGeometry( 40, 40, 40);

//     for(var i = 0; i < 20; i++){
//         var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff}));

//         object.position.x = Math.random() * 1000 - 500;
//         object.position.y = Math.random() * 600 - 300;
//         object.position.z = Math.random() * 800 - 400;

//         object.castShadow = true;
//         object.receiveShadow = true;

//         scene.add(object);

//         objects.push(object);
//     }
//     var controls = new THREE.DragControls(objects, camera, renderer.domElement);
//     controls.addEventListener('dragstart', dragStartCallback);
//     controls.addEventListener('dragen', dragendCallback);
// }

// function dragStartCallback(event){
//     startColor = event.object.material.color.getHex();
//     event.object.material.color.setHex(0x000000);
// }

// function dragendCallback(event){
//     event.object.material.color.setHex(startColor);
// }

// function animate(){
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }

// init();
// animate();
// ///////////////

// function animate(time){
//     box.rotation.x = time / 1000;
//     box.rotation.y = time / 1000;

//     step += options.speed;
//     sphere.position.y = 10 * Math.abs(Math.sin(step));

//     spotLight.angle = options.angle;
//     spotLight.penumbra = options.penumbra;
//     spotLight.intensity = options.intensity;
//     sLightHelper.update();

//     rayCaster.setFromCamera(mousePosition, camera);
//     const intersects = rayCaster.intersectObjects(scene.children);
//     console.log(intersects);

//     for(let i = 0; i < intersects.length; i++){
//         if(intersects[i].object.id === sphereId){
//             intersects[i].object.material.color.set(0xFF0000);
//         }

//         if(intersects[i].object.name === 'theBox'){
//             intersects[i].object.rotation.x = time / 1000;
//             intersects[i].object.rotation.y = time / 1000;
//         }
//     }

//     renderer.render(scene, camera);
// }

// renderer.setAnimationLoop(animate);

// window.addEventListener('resize', function() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });