var express = require('express');
var passport = require('passport');

var SessionController = require('../Controllers/sessionController.js');

var router = express.Router();

router.get('/new', SessionController.new);
router.post('/', passport.authenticate('local'), SessionController.create);
router.delete('/', SessionController.destroy);

module.exports = router;