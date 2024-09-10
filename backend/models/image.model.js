const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema(
  {
    assetId: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    uploadedAt: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Image = mongoose.model("image", ImageSchema);

module.exports = Image;
