var express = require('express');
var router = express.Router();
const giftsController = require('../controllers/giftsController')


/* GET users listing. */
// router.get('/:id', giftsController.show);
router.get('/', giftsController.index);
router.post('/', giftsController.create);
router.put('/:id', giftsController.edit);
router.delete('/:id', giftsController.delete);

module.exports = router;
