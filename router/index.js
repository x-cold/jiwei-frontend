/**
 * Created by lxstart on 2015-11-18.
 */
function routes(app) {
    app.get('/', (ctx) => {
        //ctx.body = yield this.render('test');
    });
    app.get('/test', (ctx) => {
        ctx.body = 'test';
    });
}
module.exports = routes;