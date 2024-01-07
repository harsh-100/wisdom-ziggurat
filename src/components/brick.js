import Link from "next/link";

const Brick = ({ link, name, level, specs }) => {
  return (
    <>
      {/* Level 1 */}
      <Link href={link ?? "/"} target={link ? "_blank" : ""}>
        <div
          className={`relative mt-4 w-${specs.widthHeight} h-${
            specs.widthHeight
          } bg-gray-200 rounded-lg overflow-hidden ${
            link && "ring ring-yellow-500 ring-opacity-1 shadow-xl"
          }`}
        >
          <div
            className={`absolute top-0 left-0 w-full h-full ${specs.bgColor}`}
          ></div>
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-center ${specs.textSize} font-bold`}
          >
            {name ? name : level}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Brick;
