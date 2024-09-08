import { useNavigate } from "react-router-dom";
import { ImgContext } from "../contexts/ImgContext";
import { useEffect } from "react";

function UploadPage() {
  const navigate = useNavigate("");
  const { uploadImg } = ImgContext();

  useEffect(
    function () {
      if (uploadImg === null) navigate("/");
    },
    [navigate, uploadImg]
  );

  return (
    <main className="flex items-center justify-center h-screen bg-gray-300">
      <section className="flex flex-col items-center justify-center gap-[2rem] px-[2rem] py-[4rem] bg-white w-[85%] sm:w-[55%] lg:w-[30%] rounded-[1rem]">
        <h1>Uploaded Successfully</h1>

        <div className="rounded-xl h-[35rem]">
          <img
            src={uploadImg}
            alt="uploaded image"
            className="rounded-[1.5rem] w-full h-full block"
          />
        </div>

        <div className="flex items-start w-full">
          <input type="text" />
          <button>Copy Link</button>
        </div>
      </section>
    </main>
  );
}

export default UploadPage;
