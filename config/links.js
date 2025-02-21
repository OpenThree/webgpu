import { HOST } from "./host.js"

// 企业可根据自己的需求修改url 成自己的导航地址 链接
export default {
    site: {
        name: 'WebGPU',
        url: 'https://openthree.github.io/webgpu',
        logo: HOST + 'files/site/logo.png',
        footName: '- Home',
        footLink: HOST
    },
    links: [

        {
            name: '📚Documents',
            url: 'https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene'
        },
        
        {
            name: '🐘Examples',
            url: 'https://threejs.org/examples/#webgl_animation_keyframes',
        },

        {
            name: '🍃OpenThree',
            url: 'https://openthree.github.io/three-cesium-links/'
        }
        
    ]
}