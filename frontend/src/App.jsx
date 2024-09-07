import { useRef } from "react";

function App() {
  const imageFile = useRef(null);

  function handleClick() {
    imageFile.current.click();
  }

  function handleFileChange(e) {
    const file = e.target.files[0];

    if (file.type !== "image/jpeg" && file.type !== "image/png") return;

    console.log(e.target.value);
  }

  return (
    <main className="flex items-center justify-center h-screen bg-gray-200">
      <section className="bg-white w-[25%] py-[4rem] px-[2rem] flex flex-col items-center justify-center rounded-[1rem]">
        <h1>Upload your image</h1>
        <p>File should be jpeg, png, ....</p>

        <div className="flex items-center justify-center">
          <img src="/photos.png" alt="" className="h-[4.6rem] w-auto" />
        </div>

        <p>Or</p>
        <button onClick={handleClick}>Choose a file</button>
        <input
          type="file"
          ref={imageFile}
          onChange={handleFileChange}
          className="hidden"
        />
      </section>
    </main>
  );
}

export default App;
