import { HOST, FILE_HOST } from './host.js'

export default [

    {
        pid: 'basic',
        name: '基础案例',
        name_en: 'basic',
        children: [
            {
                id: 'babylonTest',
                name: 'babylonTest',
                name_en: 'Babylon Test',
                codeUrl: HOST + 'babylon-examples/basic/babylonTest.js',
            }
        ]
    },


]
