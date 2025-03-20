import React, { useState } from "react"; //importing react and useState
import { useNavigate } from "react-router-dom"; //importing use nav to go from page to page

//import helper function
import submitNewUserDetails from "./Helpers/submitNewUserDetails";

export default function SignUpForm() {
  //state variables to handle user inputs
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //variable to handle site navigation
  const navigate = useNavigate();

  //function to handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    //if both user passwords are the same
    if (password === confirmPassword) {
      //call helper function with passed in variables
      submitNewUserDetails(
        firstname,
        lastname,
        email,
        age,
        username,
        password,
        navigate,
        setFirstname,
        setLastname,
        setEmail,
        setAge,
        setUsername,
        setPassword
      );
    } else {
      //alert if passwords aren't same
      alert("Password fields aren't the same.");
      return;
    }
  };

  return (
    <div className="border-8 rounded-3xl m-10  text-pink-200 shadow-2xl shadow-pink-200 bg-black hover:border-lime-200 hover:shadow-lime-200 hover:text-lime-200">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center mt-12 mb-8">
          <hi className="text-center mb-8 font-edu font-extrabold text-6xl tracking-widest">
            SINGUP
          </hi>
          <p className="w-1/2 justify-center items-center text-center tracking-widest text-xl font-barriecito">
            To create a complete user profile, ensure that all necessary fields
            are filled out during the profile creation process.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <label className="text-xl font-barriecito tracking-widest mb-2">
            FIRST NAME
          </label>
          <input
            value={firstname}
            type="text"
            placeholder="Type here..."
            onChange={(e) => setFirstname(e.target.value)}
            className="w-72 p-2 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label className="text-xl font-barriecito tracking-widest mb-2 mt-4">
            LAST NAME
          </label>
          <input
            value={lastname}
            type="text"
            placeholder="Type Here..."
            onChange={(e) => setLastname(e.target.value)}
            className="w-72 p-2 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label className="text-xl font-barriecito tracking-widest mb-2 mt-4">
            EMAIL
          </label>
          <input
            value={email}
            type="email"
            placeholder="Type Here..."
            onChange={(e) => setEmail(e.target.value)}
            className="w-72 p-2 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label className="text-xl font-barriecito tracking-widest mb-2 mt-4">
            AGE
          </label>
          <input
            value={age}
            type="number"
            placeholder="0"
            onChange={(e) => setAge(e.target.value)}
            className="w-72 p-2 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label className="text-xl font-barriecito tracking-widest mb-2 mt-4">
            USERNAME
          </label>
          <input
            value={username}
            type="text"
            placeholder="Type Here..."
            onChange={(e) => setUsername(e.target.value)}
            className="w-72 p-2 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label className="text-xl font-barriecito tracking-widest mb-2 mt-4">
            PASSWORD
          </label>
          <input
            value={password}
            type="password"
            placeholder="Type Here..."
            onChange={(e) => setPassword(e.target.value)}
            className="w-72 p-2 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label className="text-xl font-barriecito tracking-widest mb-2 mt-4">
            RE-ENTER PASSWORD
          </label>
          <input
            value={confirmPassword}
            type="password"
            placeholder="Type Here..."
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-72 p-2 text-lg border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
        </div>
        <div className="flex justify-center items-center mt-12 mb-12">
          <button className="border-2 py-3 px-10 text-xl font-edu font-extrabold rounded-lg tracking-widest cursor-pointer hover:text-pink-200">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
