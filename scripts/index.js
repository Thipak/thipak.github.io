import * as THREE from 'three'


function create_camera() {
  const fov = 75; //field of view
  const aspect = 2;  // the canvas default
  // anything between near and far will be rendered.
  const near = 0.1;
  const far = 5;
  return new THREE.PerspectiveCamera(fov, aspect, near, far);
}

function create_box() {
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  return new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
}

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas, alpha: true, premultipliedAlpha: false });
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // camera
  const camera = create_camera();
  camera.position.z = 2;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();

  // Scene
  const scene = new THREE.Scene();

  // create geometry
  const geometry = create_box();

  // define material of box
  const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
  
  // Mesh is the object
  // mesh contains -> combined value of (Geometry,  material,  position)
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // render the scene containing objects with the defined camera
  renderer.render(scene, camera);

  function render(time) {
    time *= 0.001;  // convert time to seconds

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
   
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    cube.rotation.x = time;
    cube.rotation.y = time;
   
    renderer.render(scene, camera);
   
    requestAnimationFrame(render);
  }
  
  requestAnimationFrame(render);
}

main();


