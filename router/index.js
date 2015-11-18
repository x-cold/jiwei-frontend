/**
 * Created by lxstart on 2015-11-18.
 */
const route = require('koa-route');
function routes(app) {
    app.get('/', (ctx) => {
        this.render('/../views/test');
    });
    app.get('/test', (ctx) => {
        ctx.body = 'test';
    });
}
module.exports = routes;