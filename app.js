/**
 * Created by lxstart on 2015-11-17.
 */
const koa = require('koa')
    ,path = require('path')
    ,fs = require('fs')
    ,staticServer = require('koa-static')
    ,route = require('koa-route')
    ,convert = require('koa-convert')
    ,logger = require('koa-logger')
    ,bodyParser = require('koa-bodyparser')
    ,views = require('koa-render')
    ,co = require('co');
const routes = require('./router/index');
var app = new koa();
app.get = function (url, func) {
    return app.use(route.get(url, func));
};
app.post = function (url, func) {
    return app.use(route.get(url, func));
};
app.all = function (url, func) {
    return app.all(route.get(url, func));
};

// views engine
app.use(convert(views('./views', {
    html: 'underscore'
})));
app.use(bodyParser());

// logger
app.use(convert(logger()));

// static server
app.use(convert(staticServer(__dirname + '/public')));
//app.use(route.get('/', routes(app)));
app.use(convert(function *(){
    this.body = yield this.render('test');
}));
// error
app.on('error', function(err, ctx) {
    log.error('server error', err, ctx);
});

app.listen(3000);