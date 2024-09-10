const express = require("express");
const router = express.Router();
const { uploadImage } = require("../controller/image.controller");

router.post("/upload", uploadImage);

module.exports = router;
