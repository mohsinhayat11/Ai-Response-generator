"use client";
import React, { useState } from "react";
import Image from "next/image";
import {GenerateText} from "@/app/actions/aiActions";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const handleSendPrompt = async () => {
    const response = await GenerateText(prompt);
    setOutput(response);
  }

  return (
    <main className="flex w-screen flex-col overflow-auto items-center justify-between px-24 pb-18">
      {
        output && (
          <div>
            <h1 className="text-2xl font-bold mb-4">AI Response</h1>
                <ReactMarkdown>{output}</ReactMarkdown>
          </div>
        )
      }
      <div className="input-area fixed bottom-6 px-24  flex  items-center justify-between w-full">
        <input className="border p-2 rounded-md  w-[80%] outline-none"
        placeholder="Type your message here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}>
        </input>
        <button onClick={handleSendPrompt}
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer ml-4 w-[18%]" onClick={handleSendPrompt}>
          Send
        </button>
      </div>
    </main>
  );
}
