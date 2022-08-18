import React, { useState } from "react";
import { UilAngleDown } from "@iconscout/react-unicons";

function Navgroup({ text = "", submenuItems = [], selected, setSelected }) {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <div
        className="relative mt-4 cursor-pointer items-center p-2 text-gray-400 transition-colors  duration-200 hover:text-white"
        onClick={() => {
          setExpand(!expand);
        }}
      >
        <div className="">
          <span className="text-md mx-4 cursor-pointer">{text}</span>
          <UilAngleDown
            className={`absolute right-3 top-3 duration-300 ${
              expand ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {expand
        ? submenuItems.map((item, index) => (
            <div
              className={`relative flex cursor-pointer items-center rounded-l-lg p-2 text-gray-400   transition-colors duration-200 ${
                selected == item.id
                  ? " bg-white text-black "
                  : "hover:text-white"
              }`}
              key={index}
              onClick={() => {
                setSelected(item.id);
              }}
            >
              <span className="text-md mx-4">{item.title}</span>
            </div>
          ))
        : ""}
    </>
  );
}

export default Navgroup;

// ${
//     selected
//       ? "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-100"
//       : ""
//   }
