const workSql = require('../sql/work');
const request = require('../util/request');
const userSql = require('../sql/user');
const {resultObj, formartDate} = require('../util/util');
const moment = require('moment');



// 添加工作记录
exports.addWork = (req,res) => {
    let { content,reason } = req.body;
    let  date = moment().format('YYYY-MM-DD hh:mm:ss');
    let promise = request(workSql.addWorkRecordSql,[req.userId,content,reason,date]);
    promise.then(()=>{
        res.send(resultObj('新增成功',200))
    },()=>{
        res.send(resultObj('新增失败',500))
    })
}

// 查询工作记录
exports.selectRecord = (req,res) => {
    let promise = request(workSql.selectRecord,[]);  
    promise.then((data)=>{
        let index = 0;
        const list = [];
        function next(){
            if(index >= data.length) {
                res.send(resultObj(null,200,list))
                return;
            }
            let o = data[index++];
            o.creatTime = formartDate(o.creatTime);
            userPromise = request(userSql.userDetail,[o.creator]);
            userPromise.then((userdata)=>{
                o.creator = userdata[0].nickname;
                list.push(o),
                next();
            });
        }
        next();
    },()=>{
        res.send(resultObj('服务器错误',500))
    })
}

exports.selectRecordDetail = (req,res) => {
    let { id } = req.query;
    //登陆前先清空之前的cookie
    let promise = request(workSql.selectRecordDetail,[id]);
    promise.then((data)=>{
        res.send(resultObj(null,200,data[0]))
    },()=>{
        res.send(resultObj('服务器',500))
    })
    
}

