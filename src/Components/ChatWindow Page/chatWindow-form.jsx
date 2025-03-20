//import use state froom react
import { useState, useEffect, useRef } from "react";

//defining a function with passed in variables
export default function ChatWindowForm({ socket, messages = [], setMessages }) {
  //state variable to handle new message
  const [newMessage, setNewMessage] = useState("");

  //ref variable to handle chat
  const chatWindowRef = useRef(null);

  useEffect(() => {
    // Get the ref to the chat window
    const chatWindow = chatWindowRef.current;

    // Log the current chat window ref and its scroll position before setting it
    console.log("Chat window:", chatWindow);
    console.log(
      "Before scrollTop - scrollHeight:",
      chatWindow ? chatWindow.scrollHeight : "N/A"
    );

    if (chatWindow) {
      // Set the scroll position to the bottom
      chatWindow.scrollTop = chatWindow.scrollHeight;

      // Log after setting the scroll position
      console.log("After scrollTop - scrollHeight:", chatWindow.scrollHeight);
    }
  }, [messages]); // Run this effect every time the messages state changes

  //defining a function to handle user send a message
  const handleSendMessage = () => {
    //if new message trim white space
    if (newMessage.trim()) {
      //emit the message to the server
      socket.emit("message", newMessage);
      //update the state to include new message
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      //clear the input field
      setNewMessage("");
    }
  };

  //function to handle key press
  const handleKeyDown = (e) => {
    //if the key pressed is "Enter/Return"
    if (e.key === "Enter") {
      e.preventDefault();
      //run send message function
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-black min-h-screen">
      <h1 className="text-7xl font-edu font-bold mb-4 text-pink-200 mt-5">
        Chat
      </h1>

      <div
        ref={chatWindowRef}
        className="w-9/12 h-96 overflow-y-scroll border-2 rounded-2xl p-3 mt-10 text-pink-200 bg-black tracking-wider mb-10"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className="p-4 mb-2 border-b-2 border-lime-200 break-words whitespace-pre-wrap"
          >
            {msg}
          </div>
        ))}
      </div>

      <textarea
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-9/12 h-20 border-2 border-pink-200 rounded-lg resize-none p-2 mb-4 text-white"
        placeholder="Type your message..."
      ></textarea>

      <button
        onClick={handleSendMessage}
        className="w-9/12 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300 cursor-pointer"
      >
        Send
      </button>
    </div>
  );
}
