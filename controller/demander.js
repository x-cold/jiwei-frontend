/**
 * Created by lxstart on 2015-11-18.
 */
var UserModel = require('../Dao/user')();
var reqFun = require('../util/response');
module.exports = {
    index: function*(){
        yield this.render('index',{'title': this.params.id + '的个人中心'});
    },
    register: function*(){
        yield this.render('user_reg', {'title': '用户注册'});
    },
    login: function*(){
        yield this.render('user_login', {'title': '用户登陆'});
    },
    checkRegister: function*(){
        var account = this.request.query.username || '12345';
        var password = this.request.query.password ||  '123455';
        UserModel.register(account,password,function(err){
            if(!err){
                res.end(JSON.stringify(reqFun.res_success_data("success")));
            }
            else{
                res.end(JSON.stringify(reqFun.res_err_data("error")));
            }
        });
    },
    checkLogin: function*(){

    }
}