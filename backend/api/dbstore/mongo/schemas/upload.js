'use strict';

const mongoose = require('mongoose');
const { COLLECTIONS } = require('../../../../constants');

const uploadSchema = new mongoose.Schema({
  file: {
    type: Buffer,
  },
  fileName: {
    type: String,
  },
  uploadedBy: {
    type: mongoose.Schema.ObjectId,
    ref: COLLECTIONS.USER,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = {
  schema: mongoose.model(COLLECTIONS.UPLOAD, uploadSchema),
};
