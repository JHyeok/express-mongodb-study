module.exports = function(app) {
    const index = require('../controllers/index.server.controller.js');
    app.get('/', index.render);
}