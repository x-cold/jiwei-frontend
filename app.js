/**
 * Created by lxstart on 2015-11-17.
 */
const koa = require('koa')
    ,path = require('path')
    ,views = require('koa-views')
    ,staticServer = require('koa-static')
    ,route = require('koa-route')
    ,convert = require('koa-convert')
    ,logger = require('koa-logger')
    ,render = require('koa-ejs');
const routes = require('./router/index');
var app = new koa();
app.get = function (path, func) {
    return app.use(route.get(path, func));
};
// logger
app.use(convert(logger()));

// view engine
render(app, {
    root: path.join(__dirname, 'view'),
    layout: 'template',
    viewExt: 'html',
    cache: false,
    debug: true,
    locals: locals,
    filters: filters
});
app.use(convert(views('views', {
    map: {
        html: 'ejs'
    }
})));

// static server
app.use(convert(staticServer(__dirname + '/public')));
app.use(route.get('/', routes(app)));

// error
app.on('error', function(err, ctx) {
    log.error('server error', err, ctx);
})

app.listen(3000);