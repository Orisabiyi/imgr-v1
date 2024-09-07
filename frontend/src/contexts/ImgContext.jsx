import { createContext, useState } from "react";

const imageContext = createContext();

function ImgContext() {
  const [uploadImg, setUploadImg] = useState(null);

  return (
    <imageContext.Provider
      value={{ uploadImg, setUploadImg }}
    ></imageContext.Provider>
  );
}

export default ImgContext;
