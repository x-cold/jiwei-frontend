/**
 * Created by lxstart on 2015-11-18.
 */
var controller = require('../controller/index');
module.exports = function(app){
    //��ҳ
    app.get('/',controller.index);
};