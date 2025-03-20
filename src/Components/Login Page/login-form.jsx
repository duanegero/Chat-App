//imports from React
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//import helper functions
import submitLogin from "./Helpers/submitLogin";
import navigateSignUp from "../SignUp Page/Helpers/navigateSignUp";
import navigateForgotPassword from "../Forgot Password Page/Helpers/navigateForgotPassword";

export default function LoginForm() {
  //state variables to handle user inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //variable to handle navigate
  const navigate = useNavigate();

  //function to handle sumbit calling helper function
  const handleSubmit = (event) => {
    event.preventDefault();
    submitLogin(username, setUsername, password, setPassword, navigate);
  };

  return (
    <>
      <div className="border-4 border-pink-200 p-6 rounded-4xl bg-black shadow-2xl shadow-pink-200 mx-auto max-w-2xl mt-10 hover:border-lime-200 hover:shadow-lime-200">
        <button
          onClick={() => navigateForgotPassword(navigate)}
          className="border border-black bg-black font-barriecito cursor-pointer p-1 rounded-xl tracking-widest text-pink-200 hover:border-lime-200 hover:bg-zinc-800 hover:text-lime-200"
        >
          FORGOT PASSWORD
        </button>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center mt-2 0w-full max-w-2xl text-pink-200 hover:text-lime-200">
            <h1 className="font-edu text-7xl  mb-10 font-extrabold tracking-wider text-center">
              Chat
            </h1>
            <p className="leading-relaxed max-w-md font-barriecito tracking-widest text-l">
              This is your space to connect, share, and chat in real time.
              Whether you're here to collaborate, make new friends, or just have
              some fun conversations, you're in the right place. Dive in, start
              chatting, and enjoy the interactive experience we've built just
              for you.{" "}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <label className="font-barriecito font-bold text-pink-200 text-2xl tracking-widest mb-4">
              USERNAME
            </label>
            <input
              value={username}
              type="text"
              placeholder="Type here..."
              onChange={(e) => setUsername(e.target.value)}
              className="text-xl px-4 py-2 border-2 border-pink-200 rounded-lg text-lime-200 mb-6"
            ></input>
            <label className="font-barriecito font-bold text-pink-200 text-2xl tracking-widest mb-4">
              PASSWORD
            </label>
            <input
              value={password}
              type="password"
              placeholder="Type here..."
              onChange={(e) => setPassword(e.target.value)}
              className="text-xl px-4 py-2 border-2 border-pink-200 rounded-lg text-lime-200"
            ></input>
          </div>
          <div className="flex justify-center items-center mt-7">
            <button
              type="submit"
              className="text-xl border-2 bg-black text-pink-200 px-6 py-1 rounded-xl my-5 hover:border-lime-200 hover:text-lime-200 cursor-pointer font-barriecito font-extrabold tracking-widest"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <div className="mx-auto max-w-2xl mt-12 mb-10">
        <button
          onClick={() => navigateSignUp(navigate)}
          className="w-full bg-black text-2xl font-barriecito text-pink-200 border-4 border-pink-200 rounded-3xl shadow-2xl shadow-pink-200 py-4 hover:text-lime-200 hover:shadow-lime-200 hover:border-lime-200 cursor-pointer tracking-widest"
        >
          SINGUP
        </button>
      </div>
    </>
  );
}
