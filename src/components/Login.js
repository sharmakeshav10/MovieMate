import React, { useState } from "react";
import Header from "./Header";
import {
  LOGIN_EMAIL_PLACEHOLDER,
  LOGIN_PASSWORD_PLACEHOLDER,
  NEW_TO_NETFLIX,
  SIGN_IN_NOW,
  SIGN_IN_TITLE,
  SIGN_UP_NOW,
  SIGN_UP_TITLE,
} from "../utils/constants/app_strings";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleAuthForms = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-image"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <form className="w-3/12 p-12 bg-black bg-opacity-70">
          <h1 className="text-white text-3xl font-bold mb-8">
            {isSignIn ? SIGN_IN_TITLE : SIGN_UP_TITLE}
          </h1>
          {!isSignIn && (
            <div className="flex">
              <input
                type="text"
                placeholder="First Name"
                className="w-full mb-4 mr-2 px-2 py-3 border-none rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full mb-4 px-2 py-3 border-none rounded"
              />
            </div>
          )}

          <input
            type="text"
            placeholder={LOGIN_EMAIL_PLACEHOLDER}
            className="w-full mb-4 px-2 py-3 border-none rounded"
          />
          <input
            type="password"
            placeholder={LOGIN_PASSWORD_PLACEHOLDER}
            className="w-full mb-4 px-2 py-3 border rounded"
          />
          <div>
            <button className="bg-red-600 w-full mb-4 p-2 border-none rounded text-white font-semibold">
              {isSignIn ? SIGN_IN_TITLE : SIGN_UP_TITLE}
            </button>
          </div>
          <p className="text-white cursor-pointer" onClick={handleAuthForms}>
            {isSignIn ? NEW_TO_NETFLIX : SIGN_IN_NOW}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
