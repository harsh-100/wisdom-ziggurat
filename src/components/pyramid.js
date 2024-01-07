import Brick from "./brick";
import Link from "next/link";
import React from "react";

const Pyramid = ({ data }) => {
  const levelSpecs = [
    {
      id: 1,
      widthHeight: 48,
      bgColor: "bg-gray-600",
      textSize: "text-2xl",
    },
    {
      id: 2,
      widthHeight: 36,
      bgColor: "bg-gray-500",
      textSize: "text-xl",
    },
    {
      id: 3,
      widthHeight: 24,
      bgColor: "bg-gray-400",
      textSize: "text-lg",
    },
    {
      id: 4,
      widthHeight: 16,
      bgColor: "bg-gray-300",
      textSize: "text-base",
    },
    {
      id: 5,
      widthHeight: 8,
      bgColor: "bg-gray-200",
      textSize: "text-small",
    },
    {
      id: 6,
      widthHeight: 4,
      bgColor: "bg-gray-100",
      textSize: "text-xs",
    },
  ];
  console.log(data);
  return (
    <div className="container mx-auto flex flex-col items-center relative">
      {/* Level 6 */}

      {/* Level 1 */}
      {/* <Link href={data[0]?.link ?? "/"} target={data[0]?.link ? "_blank" : ""}>
        <div
          className={`relative mt-4 w-48 h-48 bg-gray-200 rounded-lg overflow-hidden ${
            data[0]?.link && "ring ring-yellow-500 ring-opacity-1 shadow-xl"
          }`}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gray-600"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-center text-2xl font-bold">
            {data[0] ? data[0].name : 1}
          </div>
        </div>
      </Link> */}

      {levelSpecs.reverse().map((item, i) => {
        return (
          <Brick
            specs={item}
            level={i + 1}
            link={data[i]?.link ?? null}
            name={data[i]?.name ?? null}
            key={`level-1`}
          />
        );
      })}
    </div>
  );
};

export default React.memo(Pyramid);
