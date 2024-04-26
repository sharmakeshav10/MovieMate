import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../redux/slice/gptSearchSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants/app_constants";
import { changeLanguage } from "../redux/slice/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const gptSearchHandler = () => {
    //toggle gpt search
    dispatch(toggleGptSearchView());
  };

  const langChangeHandler = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-40"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="app-logo"
      />
      <div className="flex justify-between">
        {/* only show lang support if on gptsearchpage */}
        {showGptSearch && (
          <select
            className="mr-2 bg-black text-white p-2"
            onChange={langChangeHandler}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}

        <button className="bg-white" onClick={gptSearchHandler}>
          GPT Search
        </button>
        <button className="bg-white">Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
