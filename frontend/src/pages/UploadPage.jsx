import { useNavigate } from "react-router-dom";
import { ImgContext } from "../contexts/ImgContext";
import { useEffect, useRef } from "react";

function UploadPage() {
  const navigate = useNavigate("");
  const copyRef = useRef();
  const { curImg } = ImgContext();

  useEffect(
    function () {
      if (curImg === "") navigate("/");
    },
    [navigate, curImg]
  );

  function handleCopy() {
    navigator.clipboard.writeText(copyRef.current.value);
    alert("Link is copied to clipboard");
  }

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

        <div className="flex items-center w-full bg-gray-300/30 rounded-[1rem]">
          <input
            type="text"
            className="w-[80%] bg-transparent outline-none px-[1rem] py-[1.5rem]"
            disabled
            value={curImg}
            ref={copyRef}
          />
          <button
            className="flex-1 bg-blue-500 px-[1rem] py-[1rem] rounded-[.5rem] w-[2rem] block text-white font-medium"
            onClick={handleCopy}
          >
            Copy Link
          </button>
        </div>
      </section>
    </main>
  );
}

export default UploadPage;
