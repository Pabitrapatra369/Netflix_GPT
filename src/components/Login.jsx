import React from "react";
import Header from "./Header";
import { useState } from "react";
import { chackValidate } from "../utils/validate";
import { useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_AVATAR, USER_ICON } from "../utils/constants";
const Login = () => {
 
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //Validate the form data
    const msg = chackValidate(email.current?.value, password.current?.value);
    setErrorMessage(msg);
    //here we can do sign in or sign up

    if (msg) return;
    //sigh in /sign up logic
    if (!isSignInForm) {
      //code for sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current?.value,
            photoURL:USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //code for sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_IMG}
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="w-4/12 absolute p-12 bg-black bg-opacity-60  text-white mt-36 mx-auto right-0 left-0"
      >
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full rounded-1xl bg-gray-700 outline-none"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full rounded-1xl bg-gray-700 outline-none"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full rounded-1xl  bg-gray-700 outline-none"
        />
        <p className="text-red-600 font-bold">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          type="submit"
          className="p-4 my-4 bg-red-700 w-full rounded-1xl"
        >
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p onClick={toggleSignInForm} className="p-4 cursor-pointer">
          {isSignInForm
            ? "New to NetFlix? Sign Up Now"
            : "Already have an account?Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
