const express = require('express');
const crudController = require('../controllers/crudController');

const router = express.Router();

router.get('/booking', crudController.booking);
router.post('/booking/create', crudController.create);
router.post('/booking/edit/:id', crudController.edit);
router.post('/booking/delete/:id', crudController.delete);

module.exports = router;