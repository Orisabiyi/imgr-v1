import { useNavigate } from "react-router-dom";
import { ImgContext } from "../contexts/ImgContext";
import { BarLoader } from "react-spinners";
import { useEffect } from "react";

function Loading() {
  const navigate = useNavigate("");
  const { isLoading, setIsLoading, uploadImg, setError } = ImgContext();

  useEffect(
    function () {
      async function uploadImage() {
        try {
          setError("");

          const formData = new FormData();
          formData.append("file", uploadImg);

          const res = await fetch(
            "https://imgr-v1.onrender.com/api/image/upload",
            {
              method: "POST",
              body: formData,
            }
          );

          if (!res.ok) throw new Error("Can't upload image");

          const data = await res.json();
          if (!data.storeImage) return navigate("/");

          setIsLoading(false);
          navigate("uploaded");
        } catch (error) {
          setError(error.message);
        }
      }

      uploadImage();

      if (!isLoading) navigate("/uploaded");
    },
    [navigate, isLoading, uploadImg, setIsLoading, setError]
  );

  return (
    <main className="h-screen flex items-center justify-center bg-gray-200">
      {isLoading ? (
        <section className="rounded-xl px-[2rem] py-[3rem] shadow-md bg-white w-[85%] sm:w-[40%] lg:w-[30%]">
          <h1 className="text-[1.6rem] mb-[2rem]">Uploading...</h1>
          <BarLoader color="#2563eb" data-testid="loader" />
        </section>
      ) : (
        <div>Redirecting...</div>
      )}
    </main>
  );
}

export default Loading;
