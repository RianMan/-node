const express = require('express');
const route = require('./router/index');
const bodyParser = require('body-parser');
const app = express();

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });

// 解析表单格式的数据
app.use(bodyParser.urlencoded({extended:false}));
// 解析json字符串
app.use(bodyParser.json());

route(app);

app.listen(9000,()=>{
    console.log('localhost:9000');
})
