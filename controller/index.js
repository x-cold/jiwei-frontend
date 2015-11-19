/**
 * Created by lxstart on 2015-11-19.
 */
module.exports = {
    index: function*(){
        yield this.render('index',{"title":"koa demo"});
    }
}