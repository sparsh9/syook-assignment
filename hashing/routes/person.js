const express = require('express');
const router = express.Router();
const personController = require('../controllers/person');
const isAuth = require('../middlewares/is-auth');

router.get('/show', personController.getPerson);
router.post('/add', personController.createPerson);


module.exports = router;
