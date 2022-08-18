import React from "react";

function Navitem({ id, text = "", selected, setSelected }) {
  return (
    <div
      className={`relative mt-6 mb-2 flex cursor-pointer items-center rounded-l-lg p-2 text-gray-400 transition-colors duration-200  ${
        selected == id ? " bg-white text-black" : "hover:text-white"
      }`}
      onClick={() => {
        setSelected(id);
      }}
    >
      <div>
        <span className="text-md mx-4">{text}</span>
      </div>
    </div>
  );
}

export default Navitem;
