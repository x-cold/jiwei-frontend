/**
 * Created by lxstart on 2015-11-19.
 */
var crypto = require('crypto');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: { type: String,default:"匿名"},
    account: { type: String,unique:true},
    firstname: {type: String},
    password: { type: String },
    email: { type: String},
    sex:{type:Number,default:0},//0男，1女
    openid:{type:String}
});
var User = mongoose.model('User', UserSchema);
module.exports  = function(){
    var register = function(account,password,callback){
        var shaSum = crypto.createHash('sha256');
        shaSum.update(password);
        var user = new User({
            account:account,
            password:shaSum.digest('hex')
        });
        user.save(callback);
    };

    var login = function(data,callback){
        var shaSum = crypto.createHash('sha256');
        shaSum.update(data.password);
        User.findOne({account:data.account,password:shaSum.digest('hex')},{password:false},function(err,doc){
            callback(err,doc);
        });
    };

    var changePassword = function(account, newpassword) {
        var shaSum = crypto.createHash('sha256');
        shaSum.update(newpassword);
        var hashedPassword = shaSum.digest('hex');
        User.update({account:account}, {$set: {password:hashedPassword}},{upsert:false},
            function changePasswordCallback(err) {
                console.log('Change password done for account ' + accountId);
            });
    };

    var findByString = function(searchStr, callback) {
        var searchRegex = new RegExp(searchStr, 'i');
        User.find({
            $or: [
                { name: { $regex: searchRegex } },
                { account: { $regex: searchRegex } }
            ]
        },{password:false}, function(err,doc){
            callback(err,doc);
        });
    };

    return {
        findByString:findByString,
        changePassword:changePassword,
        register:register,
        login:login,
        User:User
    };
};
