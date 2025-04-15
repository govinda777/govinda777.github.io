// Three.js Animation for Portfolio

document.addEventListener('DOMContentLoaded', function() {
  // Check if the container exists
  const container = document.getElementById('three-container');
  if (!container) return;

  // Set up Three.js scene
  const scene = new THREE.Scene();
  
  // Initialize camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;
  
  // Create renderer
  const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true 
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);
  
  // Create particle geometry
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1500;
  
  const posArray = new Float32Array(particlesCount * 3);
  
  // Fill position array with random values
  for(let i = 0; i < particlesCount * 3; i++) {
    // Create a sphere of particles
    posArray[i] = (Math.random() - 0.5) * 50;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  
  // Create material for particles
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.1,
    color: 0x64FFDA,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true
  });
  
  // Create particle system
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);
  
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  // Mouse movement interaction
  let mouseX = 0;
  let mouseY = 0;
  
  function onDocumentMouseMove(event) {
    mouseX = (event.clientX - window.innerWidth / 2) / 100;
    mouseY = (event.clientY - window.innerHeight / 2) / 100;
  }
  
  document.addEventListener('mousemove', onDocumentMouseMove);
  
  // Handle window resize
  window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
    // Rotate particle system
    particlesMesh.rotation.x += 0.0005;
    particlesMesh.rotation.y += 0.0005;
    
    // Interactive rotation based on mouse position
    particlesMesh.rotation.x += mouseY * 0.0005;
    particlesMesh.rotation.y += mouseX * 0.0005;
    
    renderer.render(scene, camera);
  }
  
  animate();
}); 