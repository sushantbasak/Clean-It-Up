// Library

const router = require('express').Router();
const httpCode = require('http-status-codes');
const { celebrate } = require('celebrate');

// Services

const ErrorHandler = require('../../utils/errorHandler');
const jobService = require('../services/jobService');
const { MESSAGES } = require('../../../constants');

// Imports

const { userAccessOnly } = require('../middleware/role');

// Functions

const createJob = async (req, res) => {
  try {
    const createNewJob = await jobService.createJob(req.body);

    if (createNewJob.status === 'ERROR_FOUND')
      throw new Error('Unable to create a new Job in database');

    res.sendSuccess(
      createNewJob.result,
      MESSAGES.api.CREATED,
      httpCode.StatusCodes.CREATED
    );
  } catch (ex) {
    ErrorHandler.extractError(ex);
    res.sendError(
      httpCode.StatusCodes.INTERNAL_SERVER_ERROR,
      MESSAGES.api.SOMETHING_WENT_WRONG
    );
  }
};

router.post('/create', userAccessOnly, createJob);

module.exports = router;
