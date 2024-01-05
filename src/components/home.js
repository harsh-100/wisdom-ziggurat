import React, { useState } from "react";

import Pyramid from "./pyramid";

const HomeComponent = () => {
  const [data, setData] = useState([]);

  const [singleEntry, setSingleEntry] = useState({ name: "", link: "" });

  const handleAddTask = () => {
    setData([...data, singleEntry]);
    setSingleEntry({ name: "", link: "" });
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 font-sans">
      <div className="flex flex-col w-1/2 border-r border-gray-200">
        {/* Left side content */}
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col space-y-4">
            {/* <h1 className="mb-10">Wisdom Ziggurat</h1> */}
            <h1 className="text-5xl font-extrabold mb-10 text-blue-700">
              Wisdom Ziggurat
            </h1>
            <input
              className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Enter Resource Name"
              value={singleEntry.name}
              onChange={(e) =>
                setSingleEntry({ ...singleEntry, name: e.target.value })
              }
            />
            <input
              className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Enter Resource Link"
              value={singleEntry.link}
              onChange={(e) =>
                setSingleEntry({ ...singleEntry, link: e.target.value })
              }
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-1/2 bg-blue-200">
        {/* Right side - Pyramid */}
        <Pyramid data={data} />
      </div>
    </div>
  );
};

export default HomeComponent;
