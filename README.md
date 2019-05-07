# node 一个全栈项目，node.js写的后段接口

## 为什么去做这个项目
1. 学习全栈开发，提高自己的技术
2. 写一个团队可以使用的工作记录的一个平台

## 技术栈
1. 后端
    > express + mysql
2. 前端
    > react

## 项目模块
1. 登录注册
2. 利用JWT进行登陆状态的判断
    - npm install jsonwebtoken
    - 利用他的两个api
        > let token = jwt.sign({'userId':userId}, 'userId',{expiresIn: 60});
        > jwt.verify(token, 'userId',callback),
    - 逻辑就是先利用他产生的一个token返回给前端，前端保存cookie，每次请求带上，后端那这个token去匹配，如果对的或者没过期，那么就让他走下面的逻辑。注意的是： 这个校验的逻辑一定要写在verify这个函数的回调里面，不然程序直接down掉！！！

## 项目目录介绍
1. app.js为整个项目的入口
2. host为数据库连接相关的
3. router则是管理整个项目的接口路由，并在各个路由做逻辑处理
5. sql里面为查询相关的sql语句
6. util为一些通用的逻辑抽离出来的工具函数库

