import * as THREE from 'three';

class Background {
    constructor() {

        // geometry
        // this.geometry = new THREE.BoxGeometry(-500, -500, -500);
        this.geometry = new THREE.CapsuleGeometry(-500, 1, 64, 24);
        // this.geometry = new THREE.CylinderGeometry(-500, -500, 100,64);
        // this.geometry = new THREE.DodecahedronGeometry(-500, 32);

        // material
        this.material = new THREE.MeshBasicMaterial({ vertexColors: false });

        const textureLoader = new THREE.TextureLoader();

        this.texture = textureLoader.load( './../../assets/textures/space6.png' );
        this.texture.wrapS = THREE.RepeatWrapping;
        this.texture.wrapT = THREE.RepeatWrapping;

        this.material.map = this.texture;
        
        // mesh
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    getMesh() {
        return this.mesh;
    }
}

export { Background };