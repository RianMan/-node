const config = {
    host: '47.103.10.134',

    user: 'root',

    password: 'root',

    database: 'work-record',

    port: '3306'
};

const mysql = require('mysql');
// 统一的处理每一个请求，连接数据库
module.exports = (sql,params) => {
    return new Promise((resolve,reject) => {
        var connection = mysql.createConnection(config);
        connection.connect();
        connection.query(sql, params, (err,res)=>{
            if(!err){
                resolve(res);
            }else{
                reject(err);
            }
        })
        connection.end((err)=>{ if(err) reject(err) });
    })
}
