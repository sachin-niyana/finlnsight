import React, { useState } from "react";
import logo from "../../assets/images/png/logo.png";
import { Cross, Deals, File, Home, Line, Security, Setting } from "./icon";

const Sidebar = () => {
  const [theme, setTheme] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSwitch = () => {
    setTheme(!theme);
  };
  return (
    <>
      <div className="m-0">
        <div
          onClick={() => setShowSidebar(true)}
          className="absolute md:hidden left-3 sm:top-12 top-10"
        >
          <Home />
        </div>
        <div
          className={`duration-300 min-h-screen h-full pt-5 lg:min-w-[257px] md:min-w-[170px] min-w-[257px] bg-dark-navy absolute md:relative md:left-0  ${
            showSidebar ? "left-0" : "left-[-100%]"
          }`}
        >
          <img className="mt-1.5 lg:ps-8 md:ps-5 ps-8" src={logo} alt="logo" />
          <p className="lg:ps-8 md:ps-5 ps-8 font-Jost pt-7 text-gray font-normal text-lg">
            MANAGE
          </p>
          <div className="flex gap-3 mt-6">
            <Line />
            <div className="lg:ps-4 md:ps-1 ps-4">
              <File />
            </div>
            <p className="font-Jost text-sky-blue font-medium text-lg">
              New File
            </p>
          </div>
          <div className="flex lg:ps-8 md:ps-5 ps-8 gap-3 mt-6">
            <Deals />

            <p className="font-Jost text-gray font-medium text-lg">Deals</p>
          </div>
          <div className="flex lg:ps-8 md:ps-5 ps-8 gap-3 mt-6">
            <Setting />

            <p className="font-Jost text-gray font-medium text-lg">Setting</p>
          </div>
          <p className="lg:ps-8 md:ps-5 ps-8 font-Jost pt-40 text-gray font-normal text-lg">
            OTHER
          </p>

          <div className="flex lg:ps-8 md:ps-5 ps-8 gap-3 mt-6">
            <div
              className={`switch ${theme ? "switch-on" : "switch-off"}`}
              onClick={toggleSwitch}
            >
              <div className="switch-toggle"></div>
            </div>

            <p className="font-Jost text-gray font-medium text-lg">Theme</p>
          </div>
          <div className="flex lg:ps-8 md:ps-5 ps-8 gap-3 mt-6">
            <Security />

            <p className="font-Jost text-gray font-medium text-lg">Security</p>
          </div>
          <div
            className="absolute top-3 right-3 md:hidden"
            onClick={() => setShowSidebar(false)}
          >
            <Cross />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
