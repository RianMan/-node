const loginSql = 'select * from user where nickname=? and password=?';
const registerSql = 'insert into user (nickname,password) values (?,?)';
const checkNameSql = 'select * from user where nickname=?';

module.exports = {
    loginSql,
    registerSql,
    checkNameSql
}