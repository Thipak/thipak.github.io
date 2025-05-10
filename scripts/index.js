import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import Camera from './components/camera.js';
import Drop from './components/drop.js';

let scene, camera, renderer, controls;

const container = document.getElementById('scene-container');
if (!container) {
    console.error('Scene container not found!');
}

function init() {
	renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animate );
    renderer.setClearColor( 0x000000, 0 ); 
	renderer.domElement.style.position = 'absolute';
    container.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize );

    scene = new THREE.Scene();

    camera = new Camera();

    let drop = new Drop();
    scene.add( drop.mesh );
    
    function animate() {

        drop.animate();
        camera.animate();

    
        renderer.render( scene, camera.camera );
    }
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
}


init();