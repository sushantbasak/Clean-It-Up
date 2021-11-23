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

const findJob = async (data) => {
  const { result, hasError } = await dbStoreHandler.findAllJob(data);

  if (hasError) {
    return { status: 'ERROR_FOUND' };
  }

  if (result === null) return { status: 'NOT_FOUND' };

  return { result, status: 'JOB_FOUND' };
};

const jobService = {
  createJob,
  findJob,
};

module.exports = jobService;
