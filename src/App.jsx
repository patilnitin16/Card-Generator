import React, { useState } from "react";
import Api from "./Api";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const apiCall = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=20"
    );
    setData(response.data);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl text-blue-600 underline text-center pt-[20px]">
        Contact Card
      </h1>
      <div className="max-w-[1200px] m-auto">
        <div className="grid lg:grid-cols-3 gap-[10px] sm:grid-cols-2 sm:gap-[5px] rounded overflow-hidden my-[20px]">
          {data.map((elem, idx) => {
            return (
              <Api key={idx} author={elem.author} src={elem.download_url} />
            );
          })}
        </div>
      </div>

      <button
        onClick={apiCall}
        className="bg-blue-700 text-white p-[5px] rounded my-[10px]"
      >
        Generate Card
      </button>
    </div>
  );
};

export default App;
