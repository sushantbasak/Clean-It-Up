// Library

const router = require('express').Router();
const httpCode = require('http-status-codes');
const { celebrate } = require('celebrate');

// Services

const ErrorHandler = require('../../utils/errorHandler');
const jobService = require('../services/jobService');
const { MESSAGES } = require('../../../constants');
const { protect } = require('../middleware/auth');

// Imports

const {
  userAccessOnly,
  restrictWorker,
  workerAccessOnly,
  adminProtect,
} = require('../middleware/role');

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

const fetchJob = async (req, res) => {
  try {
    const fetchAllJobs = await jobService.findAllJob({
      isVerified: true,
    });

    if (fetchAllJobs.status === 'ERROR_FOUND')
      throw new Error('Something went wrong');

    res.sendSuccess(
      fetchAllJobs.result,
      MESSAGES.api.OK,
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

const fetchMyJob = async (req, res) => {
  try {
    const fetchMyJobs = await jobService.findAllJob({ postedBy: req.user._id });

    if (fetchMyJobs.status === 'ERROR_FOUND')
      throw new Error('Something went wrong');

    res.sendSuccess(
      fetchMyJobs.result,
      MESSAGES.api.OK,
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

const fetchAcceptedJob = async (req, res) => {
  try {
    const fetchAcceptJobs = await jobService.findAllJob({
      assignedTo: req.user._id,
    });

    if (fetchAcceptJobs.status === 'ERROR_FOUND')
      throw new Error('Something went wrong');

    res.sendSuccess(
      fetchAcceptJobs.result,
      MESSAGES.api.OK,
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

const acceptNewJob = async (req, res) => {
  try {
    const { jobId } = req.query;

    const { _id: workerId } = req.user;

    const acceptJob = await jobService.acceptJob({ jobId, workerId });

    if (acceptJob.status === 'ERROR_FOUND') throw new Error();

    if (acceptJob.status === 'NOT_FOUND') {
      res.sendSuccess(
        MESSAGES.api.JOB_NOT_FOUND,
        httpCode.StatusCodes.BAD_REQUEST
      );
    }

    if (acceptJob.status === 'ALREADY_ASSIGNED') {
      res.sendSuccess(
        MESSAGES.api.JOB_ALREADY_ASSIGNED,
        httpCode.StatusCodes.BAD_REQUEST
      );
    }

    res.sendSuccess(acceptJob.result, MESSAGES.api.OK, httpCode.StatusCodes.OK);
  } catch (ex) {
    ErrorHandler.extractError(ex);
    res.sendError(
      httpCode.StatusCodes.INTERNAL_SERVER_ERROR,
      MESSAGES.api.SOMETHING_WENT_WRONG
    );
  }
};

const leaveJob = async (req, res) => {
  try {
    const { jobId } = req.query;

    const { _id: workerId } = req.user;

    const leaveJob = await jobService.leaveJob({ jobId, workerId });

    if (acceptJob.status === 'ERROR_FOUND') throw new Error();

    if (acceptJob.status === 'NOT_FOUND') {
      res.sendSuccess(
        MESSAGES.api.JOB_NOT_FOUND,
        httpCode.StatusCodes.BAD_REQUEST
      );
    }

    res.sendSuccess(leaveJob.result, MESSAGES.api.Ok, httpCode.StatusCodes.Ok);
  } catch (ex) {
    ErrorHandler.extractError(ex);
    res.sendError(
      httpCode.StatusCodes.INTERNAL_SERVER_ERROR,
      MESSAGES.api.SOMETHING_WENT_WRONG
    );
  }
};

const rateJob = async (req, res) => {
  try {
    const { jobId, rating } = req.query;

    const { _id: userId } = req.user;

    const rateJob = await jobService.rateJob({ jobId, userId, rating });

    if (rateJob.status === 'ERROR_FOUND') throw new Error();

    res.sendSuccess(rateJob.result, MESSAGES.api.OK, httpCode.StatusCodes.OK);
  } catch (ex) {
    ErrorHandler.extractError(ex);
    res.sendError(
      httpCode.StatusCodes.INTERNAL_SERVER_ERROR,
      MESSAGES.api.SOMETHING_WENT_WRONG
    );
  }
};

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

// All Verified Jobs

router.get('/all', protect, fetchJob);

//Job Route -> User

router.post('/create', protect, userAccessOnly, createJob);

router.get('/my', protect, userAccessOnly, fetchMyJob);

router.get('/rate', protect, userAccessOnly, rateJob);

// Job Route -> Worker

router.get('/myjob', protect, workerAccessOnly, fetchAcceptedJob);

router.get('/accept', protect, workerAccessOnly, acceptNewJob);

router.get('/leave', protect, workerAccessOnly, leaveJob);

// Job Route -> Admin

router.get('/verify', protect, adminProtect, verifyJob);

module.exports = router;
