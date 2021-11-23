const { Job } = require('../schemas');
const ErrorHandler = require('../../../utils/errorHandler');

const createJob = async (body) => {
  try {
    const result = await Job.schema.create(body);

    if (result == null) return { result: null, hasError: null };

    const final = result.toJSON();

    return { result: final, hasError: null };
  } catch (ex) {
    ErrorHandler.extractError(ex);

    return { result: null, hasError: true };
  }
};

const findAllJob = async (body) => {
  try {
    const result = await Job.schema.find(body);

    if (result == null) return { result: null, hasError: null };

    const final = result.toJSON();

    return { result: final, hasError: null };
  } catch (ex) {
    ErrorHandler.extractError(ex);

    return { result: null, hasError: true };
  }
};

module.exports = { createJob, findAllJob };
