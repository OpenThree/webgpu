
const canvas = document.getElementById("box");

// 创建引擎
const engine = new BABYLON.WebGPUEngine(canvas);
await engine.initAsync();

// 创建场景
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color4(0.1, 0.1, 0.2, 1.0);

// 添加相机
const camera = new BABYLON.ArcRotateCamera(
    "camera",
    0, Math.PI / 3,
    10,
    BABYLON.Vector3.Zero(),
    scene
)
camera.attachControl(canvas, true)
camera.lowerRadiusLimit = 3
camera.upperRadiusLimit = 20

// 添加灯光
const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 0),
    scene
)
light.intensity = 0.7

// 创建地面
const ground = BABYLON.MeshBuilder.CreateGround("ground", {
    width: 10,
    height: 10
}, scene)
const groundMaterial = new BABYLON.StandardMaterial("groundMat", scene)
groundMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2)
ground.material = groundMaterial

// 创建立方体
const box = BABYLON.MeshBuilder.CreateBox("box", {
    size: 1
}, scene)
const boxMaterial = new BABYLON.StandardMaterial("boxMat", scene)
boxMaterial.diffuseColor = new BABYLON.Color3(0.4, 1.0, 0.4)
box.material = boxMaterial
box.position.y = 0.5

// 创建球体
const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {
    diameter: 1
}, scene)
const sphereMaterial = new BABYLON.StandardMaterial("sphereMat", scene)
sphereMaterial.diffuseColor = new BABYLON.Color3(1.0, 0.4, 0.4)
sphere.material = sphereMaterial
sphere.position.set(2, 0.5, 0)

// 添加动画
scene.registerBeforeRender(() => {
    box.rotation.y += 0.01
    sphere.position.y = 0.5 + Math.sin(Date.now() * 0.001) * 0.5
})

// 运行渲染循环
engine.runRenderLoop(() => {
    scene.render()
})

// 更新窗口大小处理
window.addEventListener("resize", () => {
    resizeCanvas();
    engine.resize();
});




