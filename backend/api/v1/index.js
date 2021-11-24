'use strict';

const router = require('express').Router();

router.use('/user', require('./controllers/userController'));
router.use('/job', require('./controllers/jobController'));

module.exports = router;
