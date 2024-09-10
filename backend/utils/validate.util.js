const validateImagePath = function (imgPath) {
  if (imgPath.includes("jpeg") || imgPath.includes("png")) return true;

  return false;
};

module.exports = validateImagePath;
