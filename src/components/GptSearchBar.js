import React from "react";
import { SEARCH_BUTTON } from "../utils/constants/app_strings";
import lang_constants from "../utils/constants/language_constants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang_constants[langKey].searchGptPlaceholder}
        />
        <button className="bg-red-700 text-white ml-3 m-4 px-4 rounded-lg col-span-3">
          {lang_constants[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
