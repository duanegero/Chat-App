//importing React and use's to use in app
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//import helper function
import submitEmailReset from "./Helpers/submitEmailReset";

export default function ForgotPasswordForm() {
  //state variables to handle user input and output to screen
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [loginPageButton, setLoginPageButton] = useState(false);
  const [message, setMessage] = useState(
    "Please enter your email address to retrieve your associated username. A password reset link will be sent to your email, allowing you to securely reset your password and regain access to your account."
  );

  //variable to handle navigation
  const navigate = useNavigate();

  //function to handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    //call helper function with passed in variables
    submitEmailReset(
      email,
      setUsername,
      setMessage,
      setEmail,
      setLoginPageButton
    );
  };

  return (
    <div className=" mt-10 flex flex-col justify-center items-center border-4 m-5 rounded-4xl p-10 border-lime-200 bg-black">
      {" "}
      <form onSubmit={handleSubmit}>
        <div>
          {loginPageButton && (
            <button
              className="border-2 border-black py-2 px-8 text-xl font-barriecito font-extrabold rounded-lg tracking-widest cursor-pointer text-lime-200 hover:text-pink-200 hover:border-pink-200 mb-10"
              onClick={() => navigate(`/login`)}
            >
              {" "}
              LOGIN
            </button>
          )}
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-center mb-12 font-edu font-extrabold text-5xl tracking-widest text-lime-200">
            FORGOT PASSWORD
          </h1>
          <p
            className="font-barriecito w-3/4 mb-12
         tracking-widest text-lg text-lime-200"
          >
            {message}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-x-4 mb-6">
          <label className="text-2xl font-barriecito tracking-widest mb-3 text-lime-200">
            Email
          </label>
          <input
            value={email}
            type="email"
            placeholder="Type here..."
            onChange={(e) => setEmail(e.target.value)}
            className="w-64 p-1 text-lg border-2 border-black rounded-lg bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-pink-200"
          ></input>
          {username && (
            <p className="font-barriecito text-2xl text-lime-200 tracking-widest mb-8">
              {username}
            </p>
          )}

          <button
            className="border-2 py-3 px-10 text-xl font-edu font-extrabold rounded-lg tracking-widest cursor-pointer text-lime-200 hover:text-pink-200"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
