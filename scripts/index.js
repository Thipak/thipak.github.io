import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

// DOM element of the WebGL output
const webGLOutput = document.getElementById('WebGL-output');

// Definition
let camera, scene, renderer, controls;

// List of objects on the scene
const objects = [];

// Time
let prevTime = performance.now();

function init() {

	// Three JS Scene base with fog
	scene = new THREE.Scene();

	// Three JS Renderer Window setup
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animate );
	renderer.domElement.style.position = 'absolute';

	window.addEventListener( 'resize', onWindowResize );

	// Append the renderer to the DOM
	webGLOutput.appendChild( renderer.domElement );

	/**
	 * Camera setup
	 * PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
	 * fov — Camera frustum vertical field of view.
	 * aspect — Camera frustum aspect ratio.
	 * near — Camera frustum near plane.
	 * far — Camera frustum far plane.
	 * 
	 * PointerLockControls( camera : Camera, domElement : HTMLElement )
	 * camera — The camera to be controlled.
	 * domElement — The HTML element used for event listeners
	 * 
	 * Result: The camera is added to the scene and the controls are added to the camera
	 * 
	 * PointerLockControls is a custom class that allows the camera to be controlled by the mouse and keyboard
	 */
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
	controls = new OrbitControls( camera, renderer.domElement );

	controls.minDistance = 100;
	controls.maxDistance = 300;

	controls.maxPolarAngle = Math.PI / 2;


	const geometry = new THREE.BoxGeometry( 15, 15, 15 );
	const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	const cube = new THREE.Mesh( geometry, material );
	cube.position.set( 0, 0, -5 );
	scene.add( cube );

	const planeGeometry = new THREE.PlaneGeometry(500, 500);
	const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.FrontSide });
	const plane = new THREE.Mesh(planeGeometry, planeMaterial);
	plane.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
	plane.position.y = -15; // Position it below the cube
	scene.add(plane);


}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	controls.update();
}

function animate() {

	// requestAnimationFrame( animate );


	const time = performance.now();
	const delta = ( time - prevTime ) / 1000;

	controls.update();
	renderer.render( scene, camera );
	
	prevTime = time;
}

window.onload = init;