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

const whiteListJob = async (req, res) => {
  try {
    const { jobId } = req.query;

    const getVerifiedJob = await jobService.verifyJob({
      jobId,
      isVerified: true,
    });

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

const blackListJob = async (req, res) => {
  try {
    const { jobId } = req.query;

    const getVerifiedJob = await jobService.verifyJob({
      jobId,
      isVerified: false,
    });

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

router.patch('/whiteList/job', protect, adminProtect, whiteListJob);

router.patch('/blackList/job', protect, adminProtect, blackListJob);

module.exports = router;
