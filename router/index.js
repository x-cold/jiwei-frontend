/**
 * Created by lxstart on 2015-11-18.
 */
var controller = require('../controller/index');
module.exports = function(app){
    /**
     * 主页
     */
    app.get('/',controller.index);
    /**
     * 获取验证码
     */
    //app.post('/getCode',controller.getCode);
    /**
     * 上传图片
     */
    //app.post('/upload',controller.upload);
};