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
                // if ( Movement.canJump === true ) Movement.velocity.y += 350;
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
        
    static move(delta, controls) {
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

            // Movement.canJump = true;

        }
    }
}

export { Movement };