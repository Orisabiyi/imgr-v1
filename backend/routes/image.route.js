const multer = require("multer");
const express = require("express");
const router = express.Router();
const { uploadImage } = require("../controller/image.controller");

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), uploadImage);

module.exports = router;
