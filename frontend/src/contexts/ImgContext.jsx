import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const imgContext = createContext();

ImgContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function ImgContextProvider({ children }) {
  const [uploadImg, setUploadImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <imgContext.Provider
      value={{
        uploadImg,
        setUploadImg,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </imgContext.Provider>
  );
}

export function ImgContext() {
  const uploadImg = useContext(imgContext);
  return uploadImg;
}
