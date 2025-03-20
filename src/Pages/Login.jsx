//importing React and useEffect
import React, { useEffect } from "react";

//importing helper function
import LoginForm from "../Components/Login Page/login-form";

export default function Login() {
  //call useEffect hook to set page title and page background
  useEffect(() => {
    document.title = "Login";
    document.body.classList.add("bg-black");

    return () => {
      document.body.classList.remove("bg-black");
    };
  });

  return (
    <>
      <LoginForm />
    </>
  );
}
