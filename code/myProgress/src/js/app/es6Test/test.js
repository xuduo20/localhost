'use strict';

/**
 * 此测试是bak_gulpfile.js
 * 是把es6转为es3的文件
 */

define(function (require, exports, module) {
    

    var $ = require('jquery');
    var obj = {
        init: function init() {
            document.write('This is ES6 file');
            console.log('This is a test!!');
        }
    };
    module.exports = obj;
});