import * as THREE from 'three';

function createSea() {
    // Sea
    const seaGeometry = new THREE.PlaneGeometry( 2000, 2000 );
    const seaMaterial = new THREE.MeshBasicMaterial( { color: 0x7EC8E3 } );
    const seaMesh = new THREE.Mesh( seaGeometry, seaMaterial );

    seaMesh.rotation.x = - Math.PI / 2;
    seaMesh.position.y = - 15;

    return seaMesh;
}

export default createSea;