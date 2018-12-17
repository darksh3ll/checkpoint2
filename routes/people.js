var express = require('express');
var router = express.Router();
const peopleController = require('../controllers/peopleController')


/* GET users listing. */
router.get('/findByFields', peopleController.findByFields);

router.get('/:id', peopleController.show);

router.put('/:id', peopleController.edit);

router.delete('/:id', peopleController.delete);

router.post('/', peopleController.create);

module.exports = router;
