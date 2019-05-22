const loginSql = 'select * from user where nickname=? and password=?';
const registerSql = 'insert into user (nickname,password,department) values (?,?,?)';
const checkNameSql = 'select * from user where nickname=?';
const userDetail = 'select nickname,department from user where id=?';

module.exports = {
    loginSql,
    registerSql,
    checkNameSql,
    userDetail
}