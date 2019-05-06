const userSql = require('../sql/user');
const request = require('../util/request');
const {resultObj} = require('../util/util');

// 用户登陆
exports.login = (req,res) => {
    let { nickname, password } = req.body;
    let promise = request(userSql.loginSql,[nickname,password]);
    promise.then((data)=>{
        console.log(data);
        if(data.length > 0){
            res.send(resultObj('恭喜你，登陆成功',200))
        }else{
            res.send(resultObj('用户名和密码错误',500))
        }
    })
}

// 用户注册
exports.register = (req,res) => {
    let { nickname, password } = req.body;
    const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
    if(!nickname || !password){
        res.send(resultObj('注册失败，请输入用户名和密码',500));
        return;
    }
    if(!reg.test(password)){
        res.send(resultObj('注册失败，密码需要大于六位且由数字和字母组成',500));
        return;
    }
    let promise = request(userSql.checkNameSql,[nickname]);
    promise.then((data)=>{
        if(data.length>0){
            res.send(resultObj('注册失败，该用户名已经被注册',500))
        }else{
            let promise = request(userSql.registerSql,[nickname, password]);
            promise.then((data)=>{
                console.log(data)
                res.send(resultObj('恭喜你，注册成功',200))
            })
        }
    },()=>{
        res.send(resultObj('注册失败',500))
    })
}
