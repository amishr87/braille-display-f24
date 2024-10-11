// function Message() {
//   return <h1>Hello World</h1>;
// }

// export default Message;

import React, { useState } from "react";

export default function Message() {
  const [text, setText] = useState("");

  const handleGenerate = () => {
    // Add your generation logic here
    console.log("Generating...");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto p-4">
        <header className="flex justify-between items-center mb-4">
          <nav>
            <ul className="flex space-x-2">
              <li>
                <button className="px-4 py-2 bg-white text-black font-semibold rounded">
                  HOME
                </button>
              </li>
              <li>
                <button className="px-4 py-2 text-white">T-to-B</button>
              </li>
            </ul>
          </nav>
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </header>
        <main className="bg-white rounded-lg p-6">
          <textarea
            className="w-full h-64 p-2 text-black border border-gray-300 rounded"
            placeholder="Paste Text Here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </main>
        <div className="flex justify-center mt-4">
          <button
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-colors"
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
