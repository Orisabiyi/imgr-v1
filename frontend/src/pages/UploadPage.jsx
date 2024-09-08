import { useNavigate } from "react-router-dom";
import { ImgContext } from "../contexts/ImgContext";

function UploadPage() {
  const navigate = useNavigate("");
  const { uploadImg } = ImgContext();

  if (!uploadImg) navigate("/");

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
