import * as THREE from 'three';

class Camera {
    constructor() {
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.camera.position.z = 5;
    }

    animate() {
        // Update camera position to rotate around 0,0,0
        this.camera.position.x = Math.sin(Date.now() * 0.001) * 5;
        this.camera.position.z = Math.cos(Date.now() / 1000) * 5;
        this.camera.lookAt(0, 0, 0);
    }
}

export default Camera;