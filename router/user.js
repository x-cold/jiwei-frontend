/**
 * Created by lxstart on 2015-11-18.
 */
var controller_usr = require('../controller/demander');
var controller = require('../controller/index');
module.exports = function(app){
    /**
     * 注册页面
     */
    app.get('/user/register', controller_usr.register);
    /**
     * 登陆页面
     */
    app.get('/user/login', controller_usr.login);
    /**
     * 注册提交表单
     */
    app.post('/user/register', controller_usr.checkRegister);
    /**
     * 登录提交表单
     */
    app.post('/user/login', controller_usr.checkLogin);
    /**
     * 用户中心
     */
    app.get('/user/:id',controller_usr.index);
    /**
     * 任务列表
     */
    app.get('/user/tasklist',controller.tasklist);
    /**
     * 任务详情
     */
    app.get('/user/taskbody',controller.taskbody);
};
