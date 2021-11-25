// Services

const dbStoreHandler = require('../../dbstore/mongo');

// Functions

const createJob = async (data) => {
  const { result, hasError } = await dbStoreHandler.createJob(data);

  if (hasError || result == null) {
    return { status: 'ERROR_FOUND' };
  }
  return { result, status: 'JOB_CREATED' };
};

const findAllJob = async (data) => {
  const { result, hasError } = await dbStoreHandler.findAllJob(data);

  if (hasError) {
    return { status: 'ERROR_FOUND' };
  }

  if (result === null) return { status: 'NOT_FOUND' };

  return { result, status: 'JOB_FOUND' };
};

const leaveJob = async (data) => {
  const { jobId, workerId } = data;

  const { result, hasError } = await dbStoreHandler.updateJob(
    { _id: jobId, assignedTo: workerId },
    { assignedTo: '' }
  );

  if (hasError) return { status: 'ERROR_FOUND' };

  if (result === NULL) return { status: 'NOT_FOUND' };

  return { result, status: 'SUCCESS' };
};

const acceptJob = async (data) => {
  const { result, hasError } = await dbStoreHandler.findJob({
    _id: jobId,
  });

  if (hasError) {
    return { status: 'ERROR_FOUND' };
  }

  if (result === NULL) return { status: 'NOT_FOUND' };

  if (result.assignedTo !== NULL) return { status: 'ALREADY_ASSIGNED' };

  const updatedData = await dbStoreHandler.updateJob(
    { _id: jobId },
    { assignedTo: workerId }
  );

  return { result: updatedData.result, status: 'SUCCESS' };
};

const completeJob = async (data) => {
  const { jobId, workerId } = data;

  const updatedJob = await dbStoreHandler.updateJob(
    { _id: jobId, assignedTo: workerId },
    { isCompleted: true }
  );

  if (updatedJob.result === NULL || updatedJob.hasError)
    return { status: 'ERROR_FOUND' };

  return { result: updatedJob.result, status: 'SUCCESS' };
};

const verifyJob = async (data) => {
  const { jobId } = data;

  const updatedJob = await dbStoreHandler.updateJob(
    { _id: jobId },
    { isVerified: true }
  );

  if (updatedJob.result === NULL || updatedJob.hasError)
    return { status: 'ERROR_FOUND' };

  return { result: updatedJob.result, status: 'SUCCESS' };
};

const rateJob = async (data) => {
  const { jobId, userId, rating } = data;

  const getJob = await dbStoreHandler.findJob({ _id: jobId });

  if (getJob.hasError) return { status: 'ERROR_FOUND' };

  if (
    getJob.result === NULL ||
    getJob.result.isCompleted === false ||
    getJob.result.assignedTo !== userId
  )
    return { status: 'NOT_FOUND' };

  const updatedJob = await dbStoreHandler.updateJob(
    { _id: jobId },
    { rate: rating }
  );

  if (updatedJob.hasError) return { status: 'ERROR_FOUND' };

  return { result: updatedJob.result, status: 'SUCCESS' };
};

const jobService = {
  createJob,
  findAllJob,
  acceptJob,
  leaveJob,
  completeJob,
  verifyJob,
  rateJob,
};

module.exports = jobService;
