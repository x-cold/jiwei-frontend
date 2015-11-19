/**
 * Created by lxstart on 2015-11-19.
 */
module.exports = {
    index: function*(){
        yield this.render('index',{'title':'计算机维护队官方网站'});
    },
    tasklist: function*(){
        yield this.render('task-list',{'title':'近期任务'});
    },
    taskbody: function*(){
        yield this.render('task-body',{'title':'计算机维护队官方网站'});
    }
}