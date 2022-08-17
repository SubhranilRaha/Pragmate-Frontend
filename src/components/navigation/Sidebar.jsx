import React, { useState } from "react";
import { UilUserCircle } from "@iconscout/react-unicons";
import logofull from "../../logofull.svg";
import Navgrid from "./Navgrid";

function Sidebar({ menuList = [] }) {
  const [selected, setSelected] = useState(1);
  return (
    <div className="w-fit bg-gray-800 pl-3">
      <div className="relative min-h-screen w-64 duration-500">
        <div className="flex flex-col items-center justify-center py-6 ">
          <img src={logofull} className="w-56 px-4" alt="logo" />

          <div className="w-4/5 rounded-2xl  bg-gray-800 p-4 ">
            <div className="flex cursor-pointer flex-row items-center justify-start gap-4">
              <a href="#" className="relative block flex-shrink-0">
                {/* <img
                  alt="profil"
                  src="/images/person/1.jpg"
                  className="mx-auto h-16 w-16 rounded-full object-cover "
                /> */}
                {/* <CgProfile className="  h-10 w-10 text-white" /> */}
                <UilUserCircle className="h-10 w-10 text-white" />
              </a>
              <div className=" flex flex-col">
                <span className="text-md font-sm  text-white">Ramesh</span>
                <span className="text-xs text-gray-400">student</span>
              </div>
            </div>
          </div>
        </div>

        <Navgrid
          menuList={menuList}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
}

export default Sidebar;
