// Library

const router = require('express').Router();
const httpCode = require('http-status-codes');
const { celebrate } = require('celebrate');

// Services

const ErrorHandler = require('../../utils/errorHandler');
const jobService = require('../services/jobService');
const { MESSAGES } = require('../../../constants');
const { protect } = require('../middleware/auth');

const { adminProtect } = require('../middleware/role');

const verifyJob = async (req, res) => {
  try {
    const { jobId } = req.query;

    const getVerifiedJob = await jobService.verifyJob({ jobId });

    if (getVerifedJob.status === 'ERROR_FOUND') throw new Error();

    res.sendSuccess(
      getVerifiedJob.result,
      MESSAGES.api.CREATED,
      httpCode.StatusCodes.OK
    );
  } catch (ex) {
    ErrorHandler.extractError(ex);
    res.sendError(
      httpCode.StatusCodes.INTERNAL_SERVER_ERROR,
      MESSAGES.api.SOMETHING_WENT_WRONG
    );
  }
};

router.get('/verify', protect, adminProtect, verifyJob);

module.exports = router;
