'use strict';

const router = require('express').Router();

router.use('/user', require('./controllers/userController'));
router.use('/job', require('./controllers/jobController'));
router.use('/upload', require('./controllers/uploadController'));
router.use('/admin', require('./controllers/adminController'));

module.exports = router;
