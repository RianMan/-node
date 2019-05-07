const express = require('express');
const route = require('./router/index');
const bodyParser = require('body-parser');
var cors = require('cors')
const cookiePareser = require('cookie-parser');
const authMiddleware = require('./middleware/auth');
const app = express();


// 可以在请求localhost的时候设置上cookie，同时解决跨域问题
app.use(cors({'credentials':true,origin:true}))

app.use(cookiePareser('nickname'));// 'nickname'是自定义字符串，用来对cookie进行签名，提高安全性。

app.use(authMiddleware);


// 解析表单格式的数据
app.use(bodyParser.urlencoded({extended:false}));
// 解析json字符串
app.use(bodyParser.json());



route(app);

app.listen(9000)
