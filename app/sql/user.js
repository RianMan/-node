const loginSql = 'select * from user where nickname=? and password=?';
const registerSql = 'insert into user (nickname,password) values (?,?)';
const checkNameSql = 'select * from user where nickname=?';
const userDetail = 'select * from user where id=?';

module.exports = {
    loginSql,
    registerSql,
    checkNameSql,
    userDetail
}