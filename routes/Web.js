const express = require('express');
const router = express.Router();

const HttpController = require('../controllers/HttpController')

router.get('/', HttpController.index);
router.get('/about', HttpController.about);
router.get('/exit', HttpController.exit);

module.exports = router;