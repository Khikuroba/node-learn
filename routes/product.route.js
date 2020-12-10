var express = require('express');
var authMiddleware = require('../middleware/auth.middleware');

var router = express.Router();
var controller = require('../controller/product.controller');


router.get('/', controller.index);

module.exports = router;