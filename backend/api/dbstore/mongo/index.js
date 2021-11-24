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

const { createJob, findAllJob, updateJob, findJob } = require('./queries/job');

mongoose.connect(
  mongoDB,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => console.log(`Database Connected`)
);

const dbStoreHandler = {
  createUser,
  findUser,
  updateUser,
  getPassword,
  createJob,
  findAllJob,
  findJob,
  updateJob,
};

module.exports = dbStoreHandler;
