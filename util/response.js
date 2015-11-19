/**
 * Created by lxstart on 2015-11-20.
 */
function res_err_data(text){
    return {
        status:0,
        info:text
    }
}
function res_success_data(text){
    return {
        status:1,
        info:text
    }
}
module.exports = {
    res_err_data:res_err_data,
    res_success_data:res_success_data
};