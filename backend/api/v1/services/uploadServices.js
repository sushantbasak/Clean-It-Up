// Services

const dbStoreHandler = require('../../dbstore/mongo');

// Functions

const createFileupload = async (data) => {
  const { result, hasError } = await dbStoreHandler.createUpload(data);

  if (hasError || result == null) {
    return { status: 'ERROR_FOUND' };
  }
  return { result, status: 'UPLOAD_CREATED' };
};

const findFileUpload = async (data) => {
  const { result, hasError } = await dbStoreHandler.findUpload(data);

  if (hasError) {
    return { status: 'ERROR_FOUND' };
  }

  if (result === null) return { status: 'NOT_FOUND' };

  return { result, status: 'UPLOAD_FOUND' };
};

module.exports = { createFileUpload, findFileUpload };
