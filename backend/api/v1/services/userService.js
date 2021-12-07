// Services

const dbStoreHandler = require('../../dbstore/mongo');

// Functions

const createUser = async (data) => {
  const { result, hasError } = await dbStoreHandler.createUser(data);

  if (hasError || result == null) {
    return { status: 'ERROR_FOUND' };
  }
  return { result, status: 'USER_CREATED' };
};

const findUser = async (data) => {
  const { result, hasError } = await dbStoreHandler.findUser(data);

  if (hasError) {
    return { status: 'ERROR_FOUND' };
  }

  if (result === null) return { status: 'NOT_FOUND' };

  return { result, status: 'USER_FOUND' };
};

const getPassword = async (data) => {
  const { result, hasError } = await dbStoreHandler.getPassword(data);

  if (result === null) return { status: 'NOT_FOUND' };

  if (hasError) {
    return { status: 'ERROR_FOUND' };
  }
  return { result, status: 'USER_FOUND' };
};

const updateUser = async (filter, updateData) => {
  const { result, hasError } = await dbStoreHandler.updateUser(
    filter,
    updateData
  );

  if (result === null) return { status: 'NOT_FOUND' };

  if (hasError) {
    return { status: 'ERROR_FOUND' };
  }
  return { result, status: 'USER_UPDATED' };
};

const verifyUser = async (data) => {
  const { userId, isVerified } = data;

  const updatedUser = await dbStoreHandler.updateUser(
    { _id: userId },
    { isVerified }
  );

  if (updatedUser.result === NULL || updatedUser.hasError)
    return { status: 'ERROR_FOUND' };

  return { result: updatedUser.result, status: 'SUCCESS' };
};

const userService = {
  createUser,
  findUser,
  getPassword,
  updateUser,
  verifyUser,
};

module.exports = userService;
