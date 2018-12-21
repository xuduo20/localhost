/**
 * 此测试是bak_gulpfile.js
 * 是把es6转为es3的文件
 */

define((require, exports, module) => {
    "use strict"
    let $ = require('jquery')
    let obj = {
        init(){
            document.write('This is ES6 file');
            console.log('This is a test!!')
        }
    }
    module.exports = obj
})