/**
 * Created by lxstart on 2015-11-21.
 */
var controller_mem = require('../controller/member');
var controller = require('../controller/index');
module.exports = function(app){
    /**
     * 注册页面
     */
    app.get('/member/register', controller_mem.register);
    /**
     * 登陆页面
     */
    app.get('/member/login', controller_mem.login);
    /**
     * 注册提交表单
     */
    app.post('/member/register', controller_mem.checkRegister);
    /**
     * 登录提交表单
     */
    app.post('/member/login', controller_mem.checkLogin);
    /**
     * 用户中心
     */
    app.get('/member/center',controller_mem.usercenter);
    /**
     * 修改信息
     */
    app.post("/member/modify", controller_mem.modify);
    /**
     * 任务列表
     */
    app.get('/member/tasklist',controller.tasklist);
    /**
     * 任务详情
     */
    app.get('/member/taskbody',controller.taskbody);
};
