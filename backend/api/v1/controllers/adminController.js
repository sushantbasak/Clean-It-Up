// Library

const router = require('express').Router();
const httpCode = require('http-status-codes');
const { celebrate } = require('celebrate');

// Services

const ErrorHandler = require('../../utils/errorHandler');
const jobService = require('../services/jobService');
const { MESSAGES } = require('../../../constants');
const { protect } = require('../middleware/auth');
const userService = require('../services/userService');

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

const whiteListUser = async (req, res) => {
  try {
    const { userId } = req.query;

    const getVerifiedUser = await userService.verifyUser({
      userId,
      isVerified: true,
    });

    if (getVerifedUser.status === 'ERROR_FOUND') throw new Error();

    res.sendSuccess(
      getVerifiedUser.result,
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

const blackListUser = async (req, res) => {
  try {
    const { userId } = req.query;

    const getVerifiedUser = await userService.verifyUser({
      userId,
      isVerified: false,
    });

    if (getVerifedUser.status === 'ERROR_FOUND') throw new Error();

    res.sendSuccess(
      getVerifiedUser.result,
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

const getAllUser = async (req, res) => {
  try {
    const getAllUser = await userService.findAllUser({});

    if (getAllUser.status === 'ERROR_FOUND') throw new Error();

    res.sendSuccess(
      getAllUser.result,
      MESSAGES.api.SUCCESS,
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

router.patch('/job/whiteList', protect, adminProtect, whiteListJob);

router.patch('/job/blackList', protect, adminProtect, blackListJob);

router.patch('/user/whiteList', protect, adminProtect, whiteListUser);

router.patch('/user/blackLlst', protect, adminProtect, blackListUser);

router.get('/user/all', protect, adminProtect, getAllUser);

module.exports = router;
