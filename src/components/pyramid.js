import React from "react";

const Pyramid = ({ data }) => {
  console.log(data);
  return (
    <div className="container mx-auto flex flex-col items-center relative">
      {/* Level 6 */}
      <div className="relative mt-4 w-4 h-4 bg-gray-200 rounded-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-100"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-center text-xs font-bold">
          6
        </div>
      </div>

      {/* Level 5 */}
      <div className="relative mt-4 w-8 h-8 bg-gray-200 rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-center text-sm font-bold">
          5
        </div>
      </div>

      {/* Level 4 */}
      <div className="relative mt-4 w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-center text-base font-bold">
          4
        </div>
      </div>

      {/* Level 3 */}
      <div className="relative mt-4 w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-center text-lg font-bold">
          3
        </div>
      </div>

      {/* Level 2 */}
      <div className="relative mt-4 w-36 h-36 bg-gray-200 rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-center text-xl font-bold">
          2
        </div>
      </div>

      {/* Level 1 */}
      <div className="relative mt-4 w-48 h-48 bg-gray-200 rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-600"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-center text-2xl font-bold">
          1
        </div>
      </div>
    </div>
  );
};

export default React.memo(Pyramid);
