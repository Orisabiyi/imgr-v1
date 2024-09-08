import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { ImgContext, ImgContextProvider } from "./contexts/ImgContext";
import Loading from "./pages/Loading";

function App() {
  const { isLoading } = ImgContext();

  return (
    <BrowserRouter>
      <ImgContextProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {isLoading && <Route path="/uploading" element={<Loading />} />}
        </Routes>
      </ImgContextProvider>
    </BrowserRouter>
  );
}

export default App;
