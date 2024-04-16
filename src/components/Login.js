import React, { useState } from "react";
import Header from "./Header";
import {
  LOGIN_EMAIL_PLACEHOLDER,
  LOGIN_PASSWORD_PLACEHOLDER,
  NEW_TO_NETFLIX,
  SIGN_IN_NOW,
  SIGN_IN_TITLE,
  SIGN_UP_TITLE,
} from "../utils/constants/app_strings";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAuthForms = () => {
    setIsSignIn(!isSignIn);
  };

  const handleInputChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Please provide a valid email.";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be greater than 6 digits.";
    }

    return errors;
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
        <pre className="text-white">{JSON.stringify(formData)}</pre>
        <form
          className="w-3/12 p-12 bg-black bg-opacity-70"
          onSubmit={handleSubmit}
        >
          <h1 className="text-white text-3xl font-bold mb-8">
            {isSignIn ? SIGN_IN_TITLE : SIGN_UP_TITLE}
          </h1>
          {!isSignIn && (
            <>
              <input
                type="text"
                placeholder="User Name"
                className="w-full mb-2 mr-2 px-2 py-3 border-none rounded"
                name="username"
                value={formData.userName}
                onChange={handleInputChange}
              />
              <p className="text-red-600 mb-4">{formErrors.username}</p>
            </>
          )}

          <input
            type="text"
            placeholder={LOGIN_EMAIL_PLACEHOLDER}
            className="w-full mb-2 px-2 py-3 border-none rounded"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <p className="text-red-600 mb-4">{formErrors.email}</p>
          <input
            type="password"
            placeholder={LOGIN_PASSWORD_PLACEHOLDER}
            className="w-full mb-2 px-2 py-3 border rounded"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <p className="text-red-600 mb-4">{formErrors.password}</p>
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
