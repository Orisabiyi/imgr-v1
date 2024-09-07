import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const imgContext = createContext();

export function ImgContextProvider({ children }) {
  const [uploadImg, setUploadImg] = useState(null);

  return (
    <imgContext.Provider value={{ uploadImg, setUploadImg }}>
      {children}
    </imgContext.Provider>
  );
}

ImgContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function ImgContext() {
  const uploadImg = useContext(imgContext);
  return uploadImg;
}
