const sharp = require('sharp');
const ErrorHandler = require('../../utils/errorHandler');

const imageCompression = async (imageData) => {
  try {
    const buffer = await sharp(imageData)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();

    return { status: 'SUCCESS', imageBuffer: buffer };
  } catch (ex) {
    ErrorHandler.extractError(ex);

    return { status: 'ERROR_FOUND' };
  }
};

module.exports = { imageCompression };
