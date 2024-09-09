const { uploader } = require("../models/imgcloudinary.model");

const uploadImage = async function (req, res) {
  try {
    const { imgPath } = req;
    const uploadImg = await uploader(imgPath);

    console.log(uploadImg);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  uploadImage,
};
