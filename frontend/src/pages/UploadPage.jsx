import { useNavigate } from "react-router-dom";
import { ImgContext } from "../contexts/ImgContext";
import { useEffect } from "react";

function UploadPage() {
  const navigate = useNavigate("");
  const { curImg } = ImgContext();

  useEffect(
    function () {
      if (curImg === "") navigate("/");
    },
    [navigate, curImg]
  );

  return (
    <main className="flex items-center justify-center h-screen bg-gray-300">
      <section className="flex flex-col items-center justify-center gap-[2rem] px-[2rem] py-[4rem] bg-white w-[85%] sm:w-[55%] lg:w-[30%] rounded-[1rem]">
        <img src="/correct.png" alt="mark icon" className="w-[4rem] h-auto" />

        <h1 className="text-[2rem]">Uploaded Successfully!</h1>

        <div className="rounded-xl h-[30rem]">
          <img
            src={curImg}
            alt="uploaded image"
            className="rounded-[1.5rem] w-full h-full block"
          />
        </div>

        <div className="flex items-start w-full bg-gray-300/30">
          <input type="text" className="w-[80%] bg-transparent" />
          <button className="flex-1 bg-blue-500">Copy Link</button>
        </div>
      </section>
    </main>
  );
}

export default UploadPage;
