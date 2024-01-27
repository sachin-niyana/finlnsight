import React from "react";
import author from "../../assets/images/png/author.png";
import { Arrow, Notification, Search } from "./icon";

const Navbar = () => {
  return (
    <>
      <div className="lg:px-10 px-3 bg-light-white w-full">
        <div className="md:flex pt-8 justify-between items-center">
          <p className="hidden md:block font-Jost font-semibold lg:text-2xl md:text-[24px] text-xl text-dark-black">
            New File
          </p>
          <div className="flex md:justify-start justify-between items-center md:gap-6 sm:gap-10 gap-3">
            <div className="flex justify-start md:ms-0 ms-7 items-center gap-2 w-48 md:h-[52px] h-9 bg-white rounded-xl border border-slate-100">
              <div className="ms-2">
                <Search />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="search-input w-full pe-2 font-Jost font-normal md:text-lg text-sm text-gray-black"
              />
            </div>
            <div className="flex items-center gap-6">
              <Notification />
              <div className="rounded-full items-center sm:gap-4 gap-2 flex">
                <img
                  className="sm:ms-1 w-8 h-8
                    "
                  src={author}
                  alt="author"
                />
                <div className="w-4 h-4">
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="md:hidden mt-5 block font-Jost font-semibold lg:text-2xl md:text-[24px] text-xl text-dark-black">
          New File
        </p>
      </div>
    </>
  );
};

export default Navbar;
