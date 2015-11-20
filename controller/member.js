/**
 * Created by lxstart on 2015-11-18.
 */
var UserModel = require('../Dao/member')();
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
                _this.redirect('/user/login');
            }
        });
    },
    checkLogin: function*(){
        var account = this.request.body.username;
        var password = this.request.body.password;
        var _this = this;
        UserModel.login({account:account,password:password},function(err,doc){
            if(err != null){
                console.log(err);
                _this.redirect('/user/login');
            }
            else{
                if(doc != null){
                    _this.session.user = doc._id;
                    _this.redirect('/user/center');
                }
                else{
                    console.log('no found');
                    _this.redirect('/user/login');
                }
            }
        });
    },
    usercenter: function* (){
        this.render('cneter', {title: '个人中心'});
    },
    modify : function (req, res) {
        console.log(req.session);
        var id = req.session.user;
        if(!id){
            res.end(JSON.stringify(reqFun.res_err_data("no login")));
            return;
        }
        var data = req.body;
        delete data._id;
        UserModel.User.findByIdAndUpdate(id,data, function (err,doc) {
            if(err==null&&doc){
                delete doc.password;
                res.end(JSON.stringify(reqFun.res_success_data(doc)));
            }
            else{
                res.end(JSON.stringify(reqFun.res_err_data("fail")));
            }
        });
    }
}

var checkIsLogin = function (_this) {
    if (_this.session.user != null || _this.session.user != undefined)
    {
        return true;
    }
    return false;
}
