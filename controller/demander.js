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
        /*
         * 检查是否已登录
         */
        if(checkIsLogin(this)){
            this.redirect('/user/center');
            return true;
        };
        yield this.render('user_login', {'title': '用户登陆'});
    },
    checkRegister: function*(){
        var account = this.request.body.username;
        var password = this.request.body.password;
        var _this = this;
        UserModel.register(account,password,function(err){
            if(!err){
                _this.session.user = account;
                _this.redirect('/user/center');
            }
            else{
                _this.redirect('/user/register');
            }
        });
    },
    checkLogin: function*(){
        var account = this.request.body.username;
        var password = this.request.body.password;
        var _this = this;
        UserModel.login({account:account,password:password},function(err,doc){
            if(err != null){

            }
            else{
                if(doc != null){
                    _this.response.status = 201;
                    _this.session.user = doc._id;
                }
                else{

                }

            }
        });
    },
    usercenter: function* (){

    }
}

var checkIsLogin = function (_this) {
    if (_this.session.user != null || _this.session.user != undefined)
    {
        return true;
    }
    return false;
}
