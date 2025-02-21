import { HOST, FILE_HOST } from './host.js'

export default [

    {
        gid: 'introduction',
        group: '常规案例',
        group_en: 'General',
        pid: 'introduction',
        name: '入门案例',
        name_en: 'Introduction',
        children: [
            {
                id: 'testWebgpu',
                name: 'WebGPU测试',
                name_en: 'WebGPU Test',
                codeUrl: HOST + 'three-examples/introduction/testWebgpu.js',
            }
        ]
    },


]
