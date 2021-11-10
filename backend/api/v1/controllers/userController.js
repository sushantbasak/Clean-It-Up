// Library

const router = require('express').Router();
const httpCode = require('http-status-codes');
const { celebrate } = require('celebrate');

// Services

const ErrorHandler = require('../../utils/errorHandler');
const userService = require('../services/userService');
const { MESSAGES } = require('../../../constants');

// Imports

const { generateAuthToken, protect } = require('../middleware/auth');
const { generateHash, compareHash, verifyHash } = require('../middleware/hash');
const { userSchema, loginSchema } = require('../validators/user.schema');

// Functions

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const user = { firstName, lastName, email, password };

  try {
    const getHashedPassword = await generateHash(user.password);

    if (getHashedPassword.status === 'ERROR_FOUND')
      throw new Error('Unable to generate Hash of given password');

    user['password'] = getHashedPassword.hash;

    const registerUser = await userService.createUser(user);

    if (registerUser.status === 'ERROR_FOUND')
      throw new Error('Unable to create a new User in database');

    res.sendSuccess(
      registerUser.result,
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

const loginUser = async (req, res) => {
  try {
    const generateToken = await generateAuthToken(req.user._id);

    if (generateToken.status === 'ERROR_FOUND')
      throw new Error('Unable to generate Authorization Token');

    res.sendSuccess(
      { token: generateToken.token },
      MESSAGES.api.SUCCESS,
      httpCode.StatusCodes.OK
    );
  } catch (ex) {
    ErrorHandler.extractError(ex);
    res.sendError(
      httpCode.StatusCodes.INTERNAL_SERVER_ERROR,
      MESSAGES.api.SOMETHING_WENT_WRONG
    );
  }
};

const getProfile = async (req, res) => {
  res.sendSuccess(req.user, MESSAGES.api.SUCCESS, httpCode.StatusCodes.OK);
};

const logoutUser = (req, res) => {
  res.send('Logout User');
};

router.post(
  '/register',
  celebrate({
    body: userSchema,
  }),
  createUser
);

router.get(
  '/login',
  celebrate({
    body: loginSchema,
  }),
  compareHash,
  loginUser
);

router.get('/profile', protect, getProfile);

router.get('/logout', protect, logoutUser);

module.exports = router;
