/**
 * 封装整体的请求格式，单独数据处理交给handle
 */

const queryPromise = require('../host/config');

module.exports = (sql,params) => {
    const promise = queryPromise(sql,params);
    return promise;
}