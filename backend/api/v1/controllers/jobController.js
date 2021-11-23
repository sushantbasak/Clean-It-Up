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
    const fetchAllJobs = await jobService.findAllJob({});

    if (fetchAllJobs.status === 'ERROR_FOUND')
      throw new Error('Something went wrong');

    res.sendSuccess(
      fetchAllJobs.result,
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

const fetchMyJob = async (req, res) => {
  try {
    const fetchMyJobs = await jobService.findMyJob({ postedBy: req.user._id });

    if (fetchMyJobs.status === 'ERROR_FOUND')
      throw new Error('Something went wrong');

    res.sendSuccess(
      fetchMyJobs.result,
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

const fetchAcceptedJob = async (req, res) => {
  try {
    const fetchAcceptJobs = await jobService.findAcceptJob({
      assignedTo: req.user._id,
    });

    if (fetchAcceptJobs.status === 'ERROR_FOUND')
      throw new Error('Something went wrong');

    res.sendSuccess(
      fetchAcceptJobs.result,
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

router.post('/create', protect, userAccessOnly, createJob);

router.get('/all', protect, fetchJob);

// Route for the Job Created by a User
router.get('/my', protect, userAccessOnly, fetchMyJob);

// Route for the Job Accepted by a Worker
router.get('/myjob', protect, workerAccessOnly, fetchAcceptedJob);

module.exports = router;
