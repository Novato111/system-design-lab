"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useCanvasStore } from "@/store/canvasStore";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

export default function TutorPanel({ problemId }: { problemId: string }) {
  const { nodes, edges, evaluationReport } = useCanvasStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getBody = () => ({
    problemId,
    nodes: nodes.map((n) => ({ id: n.id, label: n.data?.label })),
    edges: edges.map((e) => ({ source: e.source, target: e.target })),
    evaluationReport,
    // ✅ Build conversation history for context
    messages: messages.map((m) => ({
      role: m.role,
      content: m.text,
    })),
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    console.log("🚀 [CHAT] Sending:", text);
    setError(null);

    // Add user message immediately
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", text };
    setMessages((prev) => [...prev, userMsg]);

    // Placeholder for assistant response
    const assistantId = crypto.randomUUID();
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: "assistant", text: "" },
    ]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...getBody(),
          messages: [...messages, { role: "user", content: text }],
        }),
      });

      console.log("📡 [CHAT] Response status:", res.status);

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Request failed");
      }

      if (!res.body) throw new Error("No response body");

      // ✅ Read the text stream manually — no SDK magic needed
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let fullText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          console.log("✅ [CHAT] Stream complete. Full response:", fullText);
          break;
        }
        const chunk = decoder.decode(value, { stream: true });
        fullText += chunk;
        console.log("📦 [CHAT] Chunk received:", chunk);

        // Update assistant message in place as chunks arrive
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, text: fullText } : m,
          ),
        );
      }
    } catch (err: any) {
      console.error("❌ [CHAT] Error:", err);
      setError(err.message);
      // Remove the empty assistant placeholder on error
      setMessages((prev) => prev.filter((m) => m.id !== assistantId));
    } finally {
      setIsLoading(false);
    }
  };

  const quickActions = [
    {
      label: "💡 Hint",
      text: "Give me a subtle hint on what component to add next based on my current board.",
    },
    {
      label: "🔍 Bottlenecks",
      text: "Are there any single points of failure in my current design?",
    },
    {
      label: "🛡️ Security",
      text: "Is my current architecture secure? What am I missing?",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(prompt);
    setPrompt("");
  };

  return (
    <div className="flex flex-col h-full bg-white relative w-80 shrink-0 border-l border-zinc-200 shadow-[-4px_0_15px_rgba(0,0,0,0.03)] z-20">
      <div className="p-4 border-b border-zinc-200 bg-zinc-50">
        <h2 className="font-bold text-zinc-900 flex items-center gap-2">
          <span className="text-blue-600">✦</span> AI System Design Coach
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-zinc-500 text-sm mt-10">
            <p>I am your interviewer for {problemId}.</p>
            <p className="mt-2">
              Drag components onto the board and ask me for feedback!
            </p>
          </div>
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
              {m.text || <span className="opacity-40 italic">thinking...</span>}
            </div>
          </div>
        ))}

        {error && (
          <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm border border-red-200">
            {error.includes("quota") || error.includes("429")
              ? "⚠️ AI quota exceeded. Please try again later."
              : `⚠️ Error: ${error}`}
          </div>
        )}

        {isLoading && (
          <div className="text-xs text-zinc-400 animate-pulse text-left">
            Thinking...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t border-zinc-200">
        <div className="flex gap-2 overflow-x-auto pb-3 no-scrollbar">
          {quickActions.map((action, i) => (
            <button
              key={i}
              onClick={() => sendMessage(action.text)}
              disabled={isLoading}
              className="whitespace-nowrap px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-medium rounded-full transition-colors disabled:opacity-50"
            >
              {action.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            className="flex-1 px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask a question..."
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !prompt.trim()}
            className="px-4 py-2 bg-zinc-900 text-white rounded-md text-sm font-medium hover:bg-zinc-800 disabled:opacity-50 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
