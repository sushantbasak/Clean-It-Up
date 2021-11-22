'use strict';

const router = require('express').Router();

router.use('/v1', require('./v1'));

router.get('/health', (req, res) => {
  res.send({ status: 'UP' });
});

module.exports = router;
