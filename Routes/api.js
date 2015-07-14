var express = require('express');
var EventCtrl = require('../Controllers/eventController.js')

var router = express.Router();

router.get('/api(.:format)?', EventCtrl.index);
router.get('/api/new', EventCtrl.new);
router.post('/api(.:format)?', EventCtrl.create);
router.get('/api/(:_id)(.:format)?', EventCtrl.read);
router.delete('/api/(:_id)(.:format)?', EventCtrl.destroy);
router.update('/api/(:_id)(.:format)?', EventCtrl.update);
router.get('/api/:_id/change', EventCtrl.change);

module.exports = router;