const path = require("path");
const multer = require("multer");
const { options } = require("..");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(_dirname,"../my-uploads"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix  + '-' +file.originalname)
    }
  })




  const upload = multer({ storage: storage
    });
  module.exports = upload;