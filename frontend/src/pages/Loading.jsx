import { ImgContext } from "../contexts/ImgContext";
import { BarLoader } from "react-spinners";

function Loading() {
  const { isLoading } = ImgContext();

  return (
    <main>
      {isLoading && (
        <section>
          <BarLoader />
        </section>
      )}
    </main>
  );
}

export default Loading;
