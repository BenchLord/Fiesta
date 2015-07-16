var express = require('express')

var userController = require('../Controllers/userController.js');

var router = express.Router();

router.get('/new', userController.new);
router.post('/', userController.create);

module.exports = router;