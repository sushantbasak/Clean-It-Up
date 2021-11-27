const sharp = require('sharp');

const imageCompression = async (imageData) => {
  try {
    const buffer = await sharp(imageData)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();

    return { status: 'SUCCESS', imageBuffer: buffer };
  } catch (ex) {
    return { status: 'ERROR' };
  }
};

module.exports = { imageCompression };
