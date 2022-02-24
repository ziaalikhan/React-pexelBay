import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Api State
  const [imagesData, setImagesData] = useState([]);
  // Search State
  const [search, setSearch] = useState("cars blue");

  const apiKey = "25846976-bfbd472ce8fd41c22c579d3ed";
  // Api Call
  const getApiData = async (text) => {
    const response = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${text}+${text}&image_type=photo&pretty=true`
    );
    const data = await response.json();
    setImagesData(data);
  };

  const searchImages = (text) => {
    // Input Data is in text parameter
    setSearch(text);
  };

  useEffect(() => {
    getApiData(search);
  }, [search]);

  return (
    <div className="mx-auto w-10/12 m-0 mt-8">
      <div className="flex justify-center items-center mx-auto w-10/12 h-20	shadow-2xl rounded-md">
        <input
          className=" w-3/5	h-12 text-lg pl-1.5 ring-1 ring-teal-900	outline-none	outline-black	rounded-md"
          placeholder="Search Images with Colors"
          onChange={(e) => searchImages(e.target.value)}
          type="text"
        />
      </div>
      {/* Images */}
      <div className="flex flex-wrap justify-around">
        {imagesData?.hits?.map((val) => {
          return (
            <div className="w-80 h-64	 mt-8  ">
              <img
                className="w-full	h-full rounded-md	drop-shadow-2xl"
                src={val.previewURL}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
