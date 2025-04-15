// Three.js Animation
document.addEventListener('DOMContentLoaded', function() {
  // Check if the three container exists
  const threeContainer = document.getElementById('three-container');
  if (!threeContainer) return;
  
  let scene, camera, renderer;
  let particles, particleGeometry, particleMaterial;
  
  function init() {
    // Create scene
    scene = new THREE.Scene();
    
    // Set up camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({ 
      canvas: threeContainer,
      alpha: true 
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Create particles
    particleGeometry = new THREE.BufferGeometry();
    const count = 1500;
    
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const color = new THREE.Color();
    
    for (let i = 0; i < count * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 40;
      positions[i + 1] = (Math.random() - 0.5) * 40;
      positions[i + 2] = (Math.random() - 0.5) * 40;
      
      // Color 
      color.set('#64FFDA');
      color.toArray(colors, i);
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      alphaTest: 0.5,
      opacity: 0.8,
      vertexColors: true
    });
    
    particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    
    // Handle resize
    window.addEventListener('resize', onWindowResize);
    
    // Start animation
    animate();
  }
  
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  function animate() {
    requestAnimationFrame(animate);
    
    // Rotate particles
    particles.rotation.x += 0.0003;
    particles.rotation.y += 0.0005;
    
    renderer.render(scene, camera);
  }
  
  // Initialize the scene
  init();
}); 