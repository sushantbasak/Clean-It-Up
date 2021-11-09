'use strict';

const mongoose = require('mongoose');
const appSettings = require('../../../config');
const mongoDB = appSettings.mongoDb;

const { createUser, findUser, updateUser } = require('./queries/user');

mongoose.connect(
  mongoDB,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => console.log(`Database Connected on ${mongoDB}`)
);

const dbStoreHandler = {
  createUser,
  findUser,
  updateUser,
};

module.exports = dbStoreHandler;
