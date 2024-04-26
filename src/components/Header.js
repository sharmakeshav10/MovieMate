import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../redux/slice/gptSearchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const gptSearchHandler = () => {
    //toggle gpt search
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-40"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="app-logo"
      />
      <div className="flex justify-between">
        <button className="bg-white" onClick={gptSearchHandler}>
          GPT Search
        </button>
        <button className="bg-white">Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
