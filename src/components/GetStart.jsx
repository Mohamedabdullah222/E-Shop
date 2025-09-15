import React from "react";
import { LiaShareSolid } from "react-icons/lia";
import { Link } from "react-router";

const GetStart = () => {
  return (
    <div className=" container mx-auto flex flex-col md:flex-row items-center justify-around text-sm border border-gray-200 rounded-2xl m-2 max-w-5xl w-full bg-white mb-6 ">
      <div className="flex flex-col text-center md:text-left items-center md:items-start pt-14 md:p-10">
        <h2 className="md:text-4xl text-2xl font-bold text-gray-800">
          Boost your productivity.
          <br />
          Start using our app today.
        </h2>

        <div className="flex items-center gap-4 mt-6">
          <Link
            to="/sign"
            type="button"
            aria-label="getStarted"
            className="bg-indigo-500 hover:bg-indigo-600 px-7 py-2.5 text-white rounded-md active:scale-95 transition-all duration-500"
          >
            Get started
          </Link>
          <Link
            type="button"
            className="group flex items-center gap-2 px-7 py-2.5 active:scale-95 transition"
          >
            Learn more
            <LiaShareSolid />
          </Link>
        </div>
      </div>

      <img
        className="max-w-[375px] pt-10 md:p-0"
        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/excitedWomenImage.png"
        alt="excitedWomenImage"
      />
    </div>
  );
};

export default GetStart;
