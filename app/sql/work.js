const addWorkRecordSql = 'insert into work_record (creator,content,reason,creatTime) values (?,?,?,?)';
const selectRecord = 'select * from work_record';
const selectRecordDetail = 'select * from work_record where id = ?';

module.exports = {
    addWorkRecordSql,
    selectRecord,
    selectRecordDetail,
}