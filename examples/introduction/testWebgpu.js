import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const box = document.getElementById('box')

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x1a1a1a)

const camera = new THREE.PerspectiveCamera(50, box.clientWidth / box.clientHeight, 0.1, 1000)
camera.position.set(5, 5, 5)

// 创建 WebGPU 渲染器
const renderer = new THREE.WebGPURenderer({ 
    antialias: true
})
renderer.setSize(box.clientWidth, box.clientHeight)
box.appendChild(renderer.domElement)

// 添加环境光和平行光
const ambientLight = new THREE.AmbientLight(0x404040)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

// 创建物体
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
cube.position.x = -2
scene.add(cube)

const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32)
const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 })
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
sphere.position.x = 2
scene.add(sphere)

// 添加地面
const planeGeometry = new THREE.PlaneGeometry(10, 10)
const planeMaterial = new THREE.MeshPhongMaterial({ color: 0x999999 })
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = -Math.PI / 2
plane.position.y = -1
scene.add(plane)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05

// 初始化 WebGPU
async function init() {
    try {
        await renderer.init()
        animate()
    } catch (error) {
        console.error('WebGPU initialization failed:', error)
    }
}

function animate() {
    requestAnimationFrame(animate)
    
    // 添加简单的动画
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    
    sphere.rotation.y += 0.02
    sphere.position.y = Math.sin(Date.now() * 0.001) * 0.5
    
    controls.update()
    renderer.render(scene, camera)
}

window.onresize = () => {
    renderer.setSize(box.clientWidth, box.clientHeight)
    camera.aspect = box.clientWidth / box.clientHeight
    camera.updateProjectionMatrix()
}

init()
