/**
 * Created by lxstart on 2015-11-19.
 */
module.exports = {
    index: function*(){
        yield this.render('index',{'title':'计算机维护队官方网站'});
    },
    tasklist: function* (){
    yield this.render('task-list', {title: '计维冷哥哥的任务列表', username: 'xcold'});
    },
    taskbody: function* (){
        yield this.render('task-body', {title: '任务2333的详细情况', taskname: '任务2333'});
    }
}