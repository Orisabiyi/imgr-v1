import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { ImgContextProvider } from "./contexts/ImgContext";

function App() {
  return (
    <BrowserRouter>
      <ImgContextProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </ImgContextProvider>
    </BrowserRouter>
  );
}

export default App;
