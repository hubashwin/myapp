const express = require('express');
const router = express.Router();
const getAllusers = require('./controller')

router.route('/').get(getAllusers);
module.exports = router;