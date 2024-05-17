const express = require('express');
const router = express.Router();
const jokeCtrl = require('../controllers/joke');

router.get('/', jokeCtrl.getJoke);

module.exports = router;