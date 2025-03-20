import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

import { Movement} from './movement.js';

// DOM element of the WebGL output
const webGLOutput = document.getElementById('WebGL-output');

// Definition
let camera, scene, renderer, controls;

// List of objects on the scene
const objects = [];

// Time
let prevTime = performance.now();
const vertex = new THREE.Vector3();

const color = new THREE.Color();

function init() {

	// Three JS Scene base with fog
	scene = new THREE.Scene();
	scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

	// Three JS Renderer Window setup
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animate );
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
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	controls = new PointerLockControls( camera, document.body );


	/**
	 * Event listeners for the PointerLockControls
	 * Once the user clicks on the WebGL output, the PointerLockControls are locked
	 * Once the PointerLockControls are locked, mouse events are enabled.
	 * Keyboard events are enabled by default
	 */
	webGLOutput.addEventListener( 'click', function () {
		controls.lock();
	} );

	controls.addEventListener( 'lock', function () {
		console.log("PointerLockControls locked");
	
	} );
	
	controls.addEventListener( 'unlock', function () {
		console.log("PointerLockControls unlocked");
	
	} );

	document.addEventListener( 'keydown', Movement.onKeyDown );
	document.addEventListener( 'keyup', Movement.onKeyUp );

	scene.add( controls.object);

	let floorGeometry = new THREE.PlaneGeometry( 2000, 2000, 100, 100 );
	floorGeometry.rotateX( - Math.PI / 2 );

	const floorMaterial = new THREE.MeshBasicMaterial( { vertexColors: false } );

	const floor = new THREE.Mesh( floorGeometry, floorMaterial );
	scene.add( floor );

	const TextureLoader = new THREE.TextureLoader();
	const texture = TextureLoader.load( './../assets/textures/space.jpg' );
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
}

function move(delta) {
	
	Movement.velocity.x -= Movement.velocity.x * 10.0 * delta;
	Movement.velocity.z -= Movement.velocity.z * 10.0 * delta;

	Movement.velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

	Movement.direction.z = Number( Movement.moveForward ) - Number( Movement.moveBackward );
	Movement.direction.x = Number( Movement.moveRight ) - Number( Movement.moveLeft );
	Movement.direction.normalize(); // this ensures consistent movements in all directions

	
	if ( Movement.moveForward || Movement.moveBackward ) Movement.velocity.z -= Movement.direction.z * 400.0 * delta;
	if ( Movement.moveLeft || Movement.moveRight ) Movement.velocity.x -= Movement.direction.x * 400.0 * delta;

	controls.moveRight( - Movement.velocity.x * delta );
	controls.moveForward( - Movement.velocity.z * delta );

	controls.object.position.y += ( Movement.velocity.y * delta ); // new behavior

	if ( controls.object.position.y < 10 ) {

		Movement.velocity.y = 0;
		controls.object.position.y = 10;

		Movement.canJump = true;

	}

}

function animate() {
	controls.update();

	const time = performance.now();
	const delta = ( time - prevTime ) / 1000;

	move(delta);

	prevTime = time;

	renderer.render( scene, camera );

}

window.onload = init;