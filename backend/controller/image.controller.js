const { uploader } = require("../models/imgcloudinary.model");
const Image = require("../models/image.model");
const validateImagePath = require("../utils/validate.util");

const uploadImage = async function (req, res) {
  try {
    const filePath = req.file.path;
    if (!validateImagePath(filePath))
      return res.status(400).json({ message: "Invalid Image Path" });

    const {
      width,
      height,
      asset_id: assetId,
      secure_url: imgUrl,
      created_at: uploadedAt,
      display_name: displayName,
    } = await uploader(filePath);

    const storeImage = await Image.create({
      width,
      height,
      assetId,
      imgUrl,
      uploadedAt,
      displayName,
    });

    res
      .status(201)
      .json({ message: "Image as been uploaded successfully", storeImage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  uploadImage,
};
