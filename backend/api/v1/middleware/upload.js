const multer = require('multer');

const imageUpload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      return cb(new Error('Please upload png jpg jpeg'));
    }
    cb(undefined, true);
  },
});

module.exports = { imageUpload };
