import { useRef } from "react";
import { ImgContext } from "../contexts/ImgContext";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const fileInputRef = useRef();
  const navigate = useNavigate("");
  const { setUploadImg, setIsLoading } = ImgContext();

  function handleFileChange(e) {
    setUploadImg(e.target.files[0]);

    if (e.target.files.length !== 1) return;

    setIsLoading(true);
    navigate("/uploading");
  }

  function handleButtonClick() {
    fileInputRef.current.click();
  }

  return (
    <main className="flex items-center justify-center h-screen bg-gray-200 relative">
      <section
        className={`absolute top-[2rem] right-[4rem] bg-white w-[15%] px-[2rem] py-[1rem] text-[1.6rem] border-l-orange-700 border-l-[.5rem] rounded-[.5rem]`}
      >
        Hello World
      </section>

      <section className="bg-white w-[85%] sm:w-[60%] lg:w-[30%] py-[4rem] px-[2rem] flex flex-col items-center justify-center gap-[1rem] md:gap-[2rem] rounded-[1rem]">
        <h1 className="text-[2rem]">Upload your image</h1>
        <p className="text-[1.4rem] mb-[1rem] lg:text-[1.2rem]">
          File should be jpeg, png, ....
        </p>

        <div className="flex flex-col items-center justify-center gap-[2rem] p-[4rem] bg-blue-200/10 rounded-[1.5rem] w-full outline-dashed outline-2 outline-slate-400/30">
          <img
            src="/photos.png"
            alt="image placeholder"
            className="h-[10rem] w-auto"
          />
          <p className="text-[1.5rem] text-gray-400">
            Drag & Drop your image here
          </p>
        </div>

        <p className="text-[1.4rem] lg:text-[1.2rem]">Or</p>

        <button
          onClick={handleButtonClick}
          className="bg-blue-600 text-white text-[1.4rem] px-7 py-4 rounded-xl"
        >
          Choose a file
        </button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </section>
    </main>
  );
}

export default Homepage;
