import React, { useState } from "react";

const Colors = () => {
  const colorsName = [
    "red",
    "blue",
    "orange",
    "lime",
    "gray",
    "cyan",
    "indigo",
    ,
  ];
  const [col, setCol] = useState("red");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: col }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colorsName.map((color) => (
            <button
              onClick={() => setCol(`${color}`)}
              className="outline-none px-4 py-1 rounded-full uppercase text-white shadow-lg"
              style={{ background: `${color}` }}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colors;
