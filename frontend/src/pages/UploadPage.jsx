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
    <main className="flex items-center justify-center h-screen">
      <section className="flex flex-col items-center justify-center gap-[2rem] px-[2rem] py-[4rem] w-[85%] sm:w-[60%] lg:w-[30%]">
        <h1>Uploaded Successfully</h1>

        <div className="rounded-xl">
          <img src={uploadImg} alt="uploaded image" className="rounded-xl" />
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
