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
            name: '💎WebGL',
            url: 'https://openthree.github.io/three-cesium-examples/'
        },

        {
            name: '🍏Three',
            url: 'https://threejs.org/examples/',
        },

        {
            name: '🍎Babylon',
            url: 'https://www.babylonjs.com/featureDemos/',
        },

        {
            name: '🍃OpenThree',
            url: 'https://openthree.github.io/three-cesium-links/'
        }
        
    ]
}