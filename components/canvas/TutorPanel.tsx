"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { useCanvasStore } from "@/store/canvasStore";

export default function TutorPanel({ problemId }: { problemId: string }) {
  const { nodes, edges, evaluationReport } = useCanvasStore();
  const [prompt, setPrompt] = useState("");

  const { messages, sendMessage, status } = useChat({
    api: "/api/chat",
    body: {
      problemId,
      nodes,
      edges,
      evaluationReport,
    },
  });

  // v5 uses `status` instead of `isLoading`
  const isLoading = status === "streaming" || status === "submitted";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    // v5: use sendMessage instead of append
    sendMessage({ role: "user", content: prompt });
    setPrompt("");
  };

  return (
    <div className="flex flex-col h-full bg-white border-l border-zinc-200 w-80 shadow-[-4px_0_15px_rgba(0,0,0,0.03)] absolute right-0 z-20">
      <div className="p-4 border-b border-zinc-200 bg-zinc-50">
        <h2 className="font-bold text-zinc-900 flex items-center gap-2">
          <span className="text-blue-600">✦</span> AI System Design Coach
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <p className="text-sm text-zinc-500 text-center mt-10">
            Ask me for a hint, or how to handle bottlenecks in your design!
          </p>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-3 rounded-lg max-w-[90%] text-sm ${
                m.role === "user"
                  ? "bg-zinc-900 text-white"
                  : "bg-blue-50 text-blue-900 border border-blue-100"
              }`}
            >
              {/* v5: message content is m.parts, not m.content */}
              {m.parts?.map((part, i) =>
                part.type === "text" ? <span key={i}>{part.text}</span> : null,
              ) ?? m.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="text-xs text-zinc-400 animate-pulse">
            Gemini is thinking...
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-200">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask a question..."
          className="w-full p-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          disabled={isLoading}
        />
      </form>
    </div>
  );
}
