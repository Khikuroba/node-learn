var express = require('express');
var multer = require('multer');

var router = express.Router();
var controller = require('../controller/user.controller');
var validate = require('../validate/user.validate');
var authMiddleware = require('../middleware/auth.middleware');

var upload = multer({ dest: './public/uploads/' });

router.get('/', authMiddleware.requireAuth, controller.index);

router.get('/cookie', (req, res , next) => {
    res.cookie('user-id', 12345);
    res.send('Hello')
})

router.get('/create', controller.create);

router.get('/:id', controller.get)

router.get('/search', controller.search)

router.post('/create',upload.single('avatar'), validate.postCreate, controller.postCreate);

module.exports = router;