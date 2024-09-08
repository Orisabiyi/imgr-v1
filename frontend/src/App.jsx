import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { ImgContextProvider } from "./contexts/ImgContext";
import Loading from "./pages/Loading";
import UploadPage from "./pages/UploadPage";

function App() {
  return (
    <ImgContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/uploading" element={<Loading />} />
          <Route path="/uploaded" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </ImgContextProvider>
  );
}

export default App;
