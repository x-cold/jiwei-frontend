/**
 * Created by lxstart on 2015-11-20.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require("./user");
var TaskSchema = new Schema({
    title: { type: String,required: true},
    photoUrl: { type: String},
    price: { type: Number ,required: true},
    city: { type: String},
    region:{type: String},
    desc:{type:String},
    type:{type:String,required: true},
    wantTodo:{type:String},
    wantGood:{type:String},
    author:{type:String},
    pv:{type:Number,Default:0},
    createTime:{type:Date,Default: Date.now},
    comment:{type:Array},
    user_ids: [{type: Schema.Types.ObjectId, ref: 'User'}]
});
TaskSchema.index({city:1,type:1,createTime:-1});
TaskSchema.index({'user_ids':1});
var Task = mongoose.model('Task', TaskSchema);
module.exports  = function(){
    var addTask = function(data,callback){
        if(!data.type||!data.title){
            callback('error');
            return;
        }
        if(isNaN(data.price)){
            callback('Number error');
            return;
        }
        var Task = new Task(data);
        Task.save(callback);
    };
    var findByStr = function(searchStr,nextdata,perpage,callback){
        var NextTasks = new Date();
        if(nextdata){
            NextTasks = new Date(nextdata);
        }
        if(!perpage||isNaN(perpage)){
            perpage = 10;
        }
        var searchRegex = new RegExp(searchStr, 'i');
        var query;
        /*    if(type){
         query = Task.find(
         {   createTime:{$lt:NextTasks},
         title: { $regex: searchRegex },type:type },{},{limit:perpage}
         );
         }
         else{*/
        query = Task.find(
            {   createTime:{$lt:NextTasks},
                title: { $regex: searchRegex } },{},{limit:perpage}
        );
        //}
        query.sort([['createTime',-1]]);
        query.exec(function(err,doc){
            callback&&callback(err,doc);
        });
    };

    var findByType = function(type, callback) {
        var query =  Task.find(
            { type: type});
        query.sort([['createTime',-1]]);
        query.exec(function(err,doc){
            callback(err,doc);
        });
    };

    var findByCity = function(city, callback) {
        var query =  Task.find(
            { city: city});
        query.sort([['createTime',-1]]);
        query.exec(function(err,doc){
            callback(err,doc);
        });
    };

    var findByCityAndType = function(city,type, callback) {
        var query =  Task.find(
            { type: type,city:city});
        query.sort([['createTime',-1]]);
        query.exec(function(err,doc){
            callback(err,doc);
        });
    };

    return {
        findByCityAndType:findByCityAndType,
        findByCity:findByCity,
        findByType:findByType,
        addTask:addTask,
        findByStr:findByStr,
        Task:Task
    };
};
