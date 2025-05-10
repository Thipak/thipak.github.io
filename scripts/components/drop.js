import * as THREE from 'three';

class Drop {
    constructor() {
        this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
        this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.mesh = new THREE.Mesh( this.geometry, this.material );
    }

    animate() {
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
    }
}

export default Drop;