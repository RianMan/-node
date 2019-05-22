const userSql = require('../sql/user');
const request = require('../util/request');
const {resultObj} = require('../util/util');
const jwt = require('jsonwebtoken');

// 用户登陆
exports.login = (req,res) => {
    let { nickname, password } = req.body;
    //登陆前先清空之前的cookie
    let promise = request(userSql.loginSql,[nickname,password]);
    promise.then((data)=>{
        if(data.length > 0){
            const userId = data[0].id;
            var token = jwt.sign({'userId':userId}, 'userId',{expiresIn: '24h'});
            res.send(resultObj('恭喜你，登陆成功',200,{token}))
        }else{
            res.send(resultObj('用户名和密码错误',500))
        }
    })
}

// 用户注册
exports.register = (req,res) => {
    console.log(req.body)
    let { nickname, password,department } = req.body;
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
            let promise = request(userSql.registerSql,[nickname, password,department]);
            promise.then(()=>{
                res.send(resultObj('恭喜你，注册成功',200))
            },(err)=>{
                console.log(err);
                res.send(resultObj('服务器错误',500))
            })
        }
    },()=>{
        res.send(resultObj('注册失败',500))
    })
}

// 用户详情
exports.detail = (req,res) => {
    let promise = request(userSql.userDetail,[req.userId]);
        promise.then((data)=>{
        const userData = data[0];
        res.send(resultObj(null,200,{userData}));
    })
    
}
