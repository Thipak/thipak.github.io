import * as THREE from 'three';

class Movement {
    static moveLeft = false;
    static moveRight = false;
    static moveForward = false;
    static moveBackward = false;
    static canJump = false;
    static velocity = new THREE.Vector3();
    static direction = new THREE.Vector3();

    static onKeyDown(event) {
        switch ( event.code ) {

            case 'ArrowUp':
            case 'KeyW':
                Movement.moveForward = true;
                break;
    
            case 'ArrowLeft':
            case 'KeyA':
                Movement.moveLeft = true;
                break;
    
            case 'ArrowDown':
            case 'KeyS':
                Movement.moveBackward = true;
                break;
    
            case 'ArrowRight':
            case 'KeyD':
                Movement.moveRight = true;
                break;
    
            case 'Space':
                if ( Movement.canJump === true ) Movement.velocity.y += 350;
                Movement.canJump = false;
                break;
    
        }
    }

    static onKeyUp(event) {
        switch ( event.code ) {

            case 'ArrowUp':
            case 'KeyW':
                Movement.moveForward = false;
                break;
    
            case 'ArrowLeft':
            case 'KeyA':
                Movement.moveLeft = false;
                break;
    
            case 'ArrowDown':
            case 'KeyS':
                Movement.moveBackward = false;
                break;
    
            case 'ArrowRight':
            case 'KeyD':
                Movement.moveRight = false;
                break;
    
        }
    
    }
        
}

export { Movement };