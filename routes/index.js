var express = require('express');
const multer = require('multer');
var router = express.Router();

// image setup end //

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

// image setup end //

var user = require('../controller/usercontroller')

router.post('/insert',upload.single('image'), user.insert_data);

module.exports = router;
