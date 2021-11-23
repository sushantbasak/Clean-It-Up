const { MESSAGES } = require('../../../constants');
const httpCode = require('http-status-codes');

const adminProtect = (req, res, next) => {
  if (req.user.role < 2)
    return res.sendError(
      httpCode.StatusCodes.UNAUTHORIZED,
      MESSAGES.api.UNAUTHORIZED_USER
    );

  next();
};

const restrictWorker = (req, res, next) => {
  if (req.user.role === 1)
    return res.sendError(
      httpCode.StatusCodes.UNAUTHORIZED,
      MESSAGES.api.UNAUTHORIZED_USER
    );

  next();
};

module.exports = { adminProtect, restrictWorker };
