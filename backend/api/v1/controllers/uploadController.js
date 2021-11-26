// Library

const router = require('express').Router();
const httpCode = require('http-status-codes');
const { celebrate } = require('celebrate');

// Services

const ErrorHandler = require('../../utils/errorHandler');
const uploadService = require('../services/uploadService');
const { MESSAGES } = require('../../../constants');
const { imageUpload } = require('../middleware/upload');

// Functions

const getFileUpload = (req, res) => {
  res.sendSuccess(MESSAGES.api.CREATED, httpCode.StatusCodes.CREATED);
};

const uploadFile = (req, res) => {
  // console.log(req.file.buffer);

  res.sendSuccess(MESSAGES.api.CREATED, httpCode.StatusCodes.CREATED);
};

router.get('/', getFileUpload);

router.post('/', imageUpload.single('avatar'), uploadFile);

module.exports = router;
