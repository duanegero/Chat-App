import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { CiSettings } from "react-icons/ci";

import ChatWindowForm from "../Components/ChatWindow Page/chatWindow-form";
import userLogout from "../Components/ChatWindow Page/Helpers/userLogout";
import openSettingsPage from "../Components/Settings Page/Helpers/openSettingsPage";

export default function ChatWindow() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Chat";
    document.body.classList.add("bg-black");

    //variable to handle URL search
    const params = new URLSearchParams(window.location.search);
    //variable to handle username from the URL
    const usernameFromUrl = params.get("username") || "Guest";
    //set the state of username to be what's in the URL
    setUsername(usernameFromUrl);

    //variable to handle user ID from the URL
    const userIdFromUrl = params.get("userId");
    setUserId(userIdFromUrl);

    //creating a new socket connection to the server running at localhost:3007
    const newSocket = io("http://localhost:3007", {
      //the websocket transport protocol should be used
      transports: ["websocket"],
      //username as a query parameter to the server
      query: { username: usernameFromUrl },
    });

    //set the state variable with the new socket
    setSocket(newSocket);

    //listening for the message event
    newSocket.on("message", (message) => {
      //when the message recived append to the existing list
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      //cleaning up the event listener
      newSocket.off("message");
      //disconnect the socket connection
      newSocket.disconnect();
    };
  }, []);
  return (
    <>
      <div className="relative h-16">
        <CiSettings
          onClick={() => openSettingsPage(username, userId, navigate)}
          className="absolute top-4 left-4 bg-black text-7xl text-pink-200 cursor-pointer active:text-lime-200 hover:text-white"
        />
        <button
          onClick={() => userLogout(navigate)}
          className="absolute top-8 right-6 bg-black border shadow-2xl shadow-pink-200 text-pink-200 rounded-3xl px-4 py-2 cursor-pointer font-barriecito tracking-widest text-xl hover:border-white hover:text-white hover:bg-zinc-800 hover:shadow-white active:border-lime-200 active:text-lime-200"
        >
          LOGOUT
        </button>
      </div>
      <div>
        <ChatWindowForm
          socket={socket}
          messages={messages}
          setMessages={setMessages}
        />
      </div>
    </>
  );
}
