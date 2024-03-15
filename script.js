import * as THREE from 'three'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// create sphere

const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.MeshBasicMaterial({
    // color: 0xFF0000
    map: new THREE.TextureLoader().load('./img/globe.jpg')
})
)

scene.add(sphere)

camera.position.z = 15

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate()
