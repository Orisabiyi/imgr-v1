import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const imgContext = createContext();

ImgContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function ImgContextProvider({ children }) {
  const [uploadImg, setUploadImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <imgContext.Provider
      value={{ uploadImg, setUploadImg, isLoading, setIsLoading }}
    >
      {children}
    </imgContext.Provider>
  );
}

export function ImgContext() {
  const uploadImg = useContext(imgContext);
  return uploadImg;
}
