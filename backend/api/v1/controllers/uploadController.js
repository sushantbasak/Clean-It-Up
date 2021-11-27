// Library

const router = require('express').Router();
const httpCode = require('http-status-codes');
const { celebrate } = require('celebrate');
const sharp = require('sharp');

// Services

const ErrorHandler = require('../../utils/errorHandler');
const uploadService = require('../services/uploadService');
const { MESSAGES } = require('../../../constants');
const { imageUpload } = require('../middleware/upload');
const { imageCompression } = require('../services/fileCompression');
const { protect } = require('../middleware/auth');

// Functions

const getFileUpload = async (req, res) => {
  try {
    const { id } = req.params;

    const findImage = await uploadService.findFileUpload({ _id: id });

    if (findImage.status === 'ERROR_FOUND') throw new Error();

    if (findImage.status === 'NOT_FOUND') {
      res.sendError(httpCode.StatusCodes.NOT_FOUND, MESSAGES.api.NOT_FOUND);
    }

    res.sendSuccess(
      findImage.result,
      MESSAGES.api.FOUND,
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

const uploadFile = async (req, res) => {
  try {
    const compressedImage = await imageCompression(req.file.buffer);

    if (compressedImage.status === 'ERROR_FOUND')
      throw new Error('Unable to compress Images');

    const uploadResult = await uploadService.createFileUpload({
      file: compressedImage.imageBuffer,
      uploadedBy: req.user._id,
      fileName: req.file.originalname,
    });

    if (uploadResult.status === 'ERROR_FOUND')
      throw new Error('Unable to create a new File Upload');

    delete uploadResult.result.file;

    res.sendSuccess(
      uploadResult.result,
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

router.get('/:id', getFileUpload);

router.post('/', imageUpload.single('avatar'), protect, uploadFile);

module.exports = router;
