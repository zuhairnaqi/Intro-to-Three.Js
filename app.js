// Check if browser supports webgl or not
if (!WEBGL.isWebGLAvailable()) {    
	const warning = WEBGL.getWebGLErrorMessage();
    document.body.appendChild( warning );
} else {    
    const scene = new THREE.Scene();
    // PerspectiveCamera(field of view, aspect ratio, near, far)
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer();
    // setSize(dimension to show the scene on dom);
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild(renderer.domElement);
    
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000});
    const cube = new THREE.Mesh(geometry, material);
    
    scene.add(cube);
    camera.position.z = 5;
    
    
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    
    animate();

}    

