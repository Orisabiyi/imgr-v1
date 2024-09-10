const validateImagePath = function (imgPath) {
  if (!imgPath.includes("jpeg") && !imgPath.includes("png")) return false;
};

module.exports = validateImagePath;
