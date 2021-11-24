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

const findJob = async (body) => {
  try {
    const result = await Job.schema.findOne(body);

    if (result == null) return { result: null, hasError: null };

    const final = result.toJSON();

    return { result: final, hasError: null };
  } catch (ex) {
    ErrorHandler.extractError(ex);

    return { result: null, hasError: true };
  }
};

const updateJob = async (filter, updateData) => {
  try {
    const updatedData = await Job.schema.findOneAndUpdate(filter, updateData, {
      new: true,
      runValidators: true,
    });

    if (updatedData._id == null) return { result: null, hasError: null };

    return {
      result: updatedData,
      hasError: null,
    };
  } catch (ex) {
    ErrorHandler.extractError(ex);

    return { result: null, hasError: true };
  }
};

module.exports = { createJob, findAllJob, findJob, updateJob };
