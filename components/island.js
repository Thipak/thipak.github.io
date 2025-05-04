import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

const pathToAssets = '../assets/';

function createIsland() {

    // loader.load(pathToAssets + 'patch-sand-foliage.glb')
    // Island
    const islandGeometry = new THREE.DodecahedronGeometry( 100, 0 );
    const islandMaterial = new THREE.MeshBasicMaterial( { color: 0x8B4513 } );
    const islandMesh = new THREE.Mesh( islandGeometry, islandMaterial );

    islandMesh.rotation.x = Math.PI / 3;
    islandMesh.position.y = - 15;
    islandMesh.position.z = - 5;

    return islandMesh;
}

export default createIsland;