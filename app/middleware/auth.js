const jwt = require('jsonwebtoken');
const {resultObj} = require('../util/util');

// 设置鉴权的中间件
module.exports = function authUser(req, res, next){
    let token = req.get('Token');
    let id;
    if(token !== 'null'){
        jwt.verify(token, 'userId',function(err,decoded){
            if(err){
                id = null;
            }else{
                id = decoded.userId;
            }
        });
    }
    if(req.url === '/user/register' || req.url === '/user/login'){
        next();
        return;
    }
    if(id){
        next();
    }else{
        res.send(resultObj('登录状态已失效，请重新登录',401));
    }
}