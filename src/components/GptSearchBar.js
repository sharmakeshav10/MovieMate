import React from "react";
import { SEARCH_BUTTON } from "../utils/constants/app_strings";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder="Search what do you wanna see"
        />
        <button className="bg-red-700 text-white ml-3 m-4 px-4 rounded-lg col-span-3">
          {SEARCH_BUTTON}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
