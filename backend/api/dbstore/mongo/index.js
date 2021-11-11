'use strict';

const mongoose = require('mongoose');
const appSettings = require('../../../config');
const mongoDB = appSettings.mongoDb;

const {
  createUser,
  findUser,
  updateUser,
  getPassword,
} = require('./queries/user');

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
  getPassword,
};

module.exports = dbStoreHandler;
