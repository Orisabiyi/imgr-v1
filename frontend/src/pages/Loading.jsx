import { ImgContext } from "../contexts/ImgContext";
import { BarLoader } from "react-spinners";

function Loading() {
  const { isLoading } = ImgContext();

  return (
    <main className="h-screen flex items-center justify-center bg-gray-200">
      {isLoading && (
        <section className="rounded-xl px-[2rem] py-[3rem] shadow-md bg-white w-[85%] sm:w-[40%] lg:w-[30%]">
          <h1 className="text-[1.6rem] mb-[1rem]">Uploading...</h1>
          <BarLoader color="#2563eb" data-testid="loader" />
        </section>
      )}
    </main>
  );
}

export default Loading;
