const user = require('./user');
const work = require('./work');

module.exports = (app) => {
    app.post('/user/login', user.login);
    app.post('/user/register', user.register);
    app.get('/user/detail', user.detail);

    app.post('/work/add', work.addWork);
    app.get('/work/record_list', work.selectRecord);
    app.get('/work/detail', work.selectRecordDetail);

}