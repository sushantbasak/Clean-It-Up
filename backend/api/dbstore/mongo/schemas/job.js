'use strict';

const mongoose = require('mongoose');
const { COLLECTIONS } = require('../../../../constants');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add First name'],
  },
  description: {
    type: String,
    required: [true, 'Please add Last name'],
  },
  level: {
    type: Number,
    default: 1,
    min: 1,
    max: 5,
  },
  pincode: {
    type: Number,
  },
  address: {
    type: String,
    required: [true, 'Please add Addresss'],
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: COLLECTIONS.USER,
    required: true,
  },
  assignedTo: {
    type: mongoose.Schema.ObjectId,
    ref: COLLECTIONS.USER,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  review: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  isClosed: {
    type: Boolean,
    default: false,
  },
  rate: {
    type: Number,
    default: 1,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = {
  schema: mongoose.model(COLLECTIONS.JOB, jobSchema),
};
