// Library

const jwt = require('jsonwebtoken');
const httpCode = require('http-status-codes');
const url = require('url');

// Services

const appSettings = require('../../../config/index');
const ErrorHandler = require('../../utils/errorHandler');
const { MESSAGES } = require('../../../constants');
const {
  jwt: { secret, expiresIn, resetsecret, resetexpiresIn },
} = appSettings;

// Imports

// Functions

const generateAuthToken = async (userId, expiry = false) => {
  try {
    let expiryTime = expiresIn,
      secretValue = secret;

    if (expiry) {
      expiryTime = resetexpiresIn;

      secretValue = resetsecret;
    }

    const token = await jwt.sign(
      { id: userId, date: new Date().getTime() },
      secretValue,
      { expiresIn: expiryTime }
    );

    return { status: 'SUCCESS', token };
  } catch (ex) {
    ErrorHandler.extractError(ex);
    return { status: 'ERROR_FOUND' };
  }
};

module.exports = { generateAuthToken };
