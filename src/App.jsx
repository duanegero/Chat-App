import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ChatWindow from "./Pages/ChatWindow";
import Login from "./Pages/Login";
import Settings from "./Pages/Settings";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="chat" element={<ChatWindow />} />
        <Route path="settings" element={<Settings />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
