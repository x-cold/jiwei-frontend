/**
 * Created by lxstart on 2015-11-17.
 */
var convert = require('koa-convert')
var debug = require('debug')('koa-demo');
var koa = require('koa');
//�����ļ�
var config = require('./config/config');

var app = koa();
app.use(function *(next){
    //config ע���м�����������������Ϣ
    if(!this.config){
        this.config = config;
    }
    yield next;
});

//log��¼
var Logger = require('mini-logger');
var logger = Logger({
    dir: config.logDir,
    format: 'YYYY-MM-DD-[{category}][.log]'
});

//router use : this.logger.error(new Error(''))
app.context.logger = logger;

var onerror = require('koa-onerror');
onerror(app);

//xtemplate��koa������
var xtplApp = require('xtpl/lib/koa');
//xtemplateģ����Ⱦ
xtplApp(app,{
    //����ģ��Ŀ¼
    views: config.viewDir
});

var session = require('koa-session');
app.use(session(app));

//post body ����
var bodyParser = require('koa-bodyparser');
app.use(bodyParser());
//����У��
var validator = require('koa-validator');
app.use(validator());
//��̬�ļ�
var staticServer = require('koa-static');
app.use((staticServer(__dirname + '/public')));

//��̬�ļ�cache
var staticCache = require('koa-static-cache');
var staticDir = config.staticDir;
app.use(staticCache(staticDir+'/js'));
app.use(staticCache(staticDir+'/css'));

//·��
var router = require('koa-router');
app.use(router(app));

//Ӧ��·��
var appRouter = require('./router/index');
appRouter(app);

app.listen(config.port);
console.log('listening on port %s',config.port);

module.exports = app;

