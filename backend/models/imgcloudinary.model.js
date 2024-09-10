require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_APIKEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

const uploader = async function (imgPath) {
  try {
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };

    const result = await cloudinary.uploader.upload(imgPath, options);
    if (!result) throw new Error();

    console.log(result);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  uploader,
};
