/**
 * Created by lxstart on 2015-11-17.
 */
const Koa = require('koa');
const app = new Koa();
const convert = require('koa-convert')

// logger

app.use(convert(function *(next){
    const start = new Date;
    yield next;
    const ms = new Date - start;
    console.log(`${this.method} ${this.url} - ${ms}ms`);
}));

// response

app.use(ctx => {
    ctx.body = 'scaujiwei';
});

app.listen(3000);