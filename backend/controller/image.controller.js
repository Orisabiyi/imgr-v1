const { uploader } = require("../models/imgcloudinary.model");
const validateImagePath = require("../utils/validate.util");

const uploadImage = async function (req, res) {
  try {
    const { imgPath } = req.body;
    if (!validateImagePath(imgPath))
      return res.status(400).json({ message: "Invalid Image Path" });

    const uploadImg = await uploader(imgPath);

    console.log(uploadImg);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  uploadImage,
};
