const user = require('./user');

module.exports = (app) => {
    app.post('/user/login', user.login);
    app.post('/user/register', user.register);
    app.get('/user/detail', user.detail);
}