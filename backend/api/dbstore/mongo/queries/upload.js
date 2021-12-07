const { Upload } = require('../schemas');
const ErrorHandler = require('../../../utils/errorHandler');

const createUpload = async (body) => {
  try {
    const result = await Upload.schema.create(body);

    if (result == null) return { result: null, hasError: null };

    const final = result.toJSON();

    return { result: final, hasError: null };
  } catch (ex) {
    ErrorHandler.extractError(ex);

    return { result: null, hasError: true };
  }
};

const findUpload = async (body) => {
  try {
    const result = await Upload.schema.findOne(body);

    if (result == null) return { result: null, hasError: null };

    const final = result.toJSON();

    return { result: final, hasError: null };
  } catch (ex) {
    ErrorHandler.extractError(ex);

    return { result: null, hasError: true };
  }
};

module.exports = { createUpload, findUpload };
