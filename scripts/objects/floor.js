import * as THREE from 'three';

class Floor {
    constructor() {

        // geometry
        this.geometry = new THREE.PlaneGeometry( 2000, 2000, 100, 100 );
        this.geometry.rotateX( - Math.PI / 2 );

        // material
        this.material = new THREE.MeshBasicMaterial( { vertexColors: false } );

        const textureLoader = new THREE.TextureLoader();

        this.texture = textureLoader.load( './../../assets/textures/space.jpg' );
        this.texture.wrapS = THREE.RepeatWrapping;
        this.texture.wrapT = THREE.RepeatWrapping;

        this.material.map = this.texture;

        // mesh
        this.mesh = new THREE.Mesh( this.geometry, this.material );
    }

    getMesh() {
        return this.mesh;
    }
}

export { Floor };