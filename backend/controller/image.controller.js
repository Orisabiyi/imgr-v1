const { uploader } = require("../models/imgcloudinary.model");
const Image = require("../models/image.model");
const validateImagePath = require("../utils/validate.util");

const uploadImage = async function (req, res) {
  try {
    const { imgPath } = req.body;
    if (!validateImagePath(imgPath))
      return res.status(400).json({ message: "Invalid Image Path" });

    const {
      width,
      height,
      asset_id: assetId,
      secure_url: imgUrl,
      created_at: uploadedAt,
      display_name: displayName,
    } = await uploader(imgPath);

    const storeImage = await Image({
      width,
      height,
      assedId,
      imgUrl,
      uploadedAt,
      displayName,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  uploadImage,
};
