// components/canvas/Header.tsx
"use client";

import { useState } from "react";
import { useCanvasStore } from "@/store/canvasStore";
import { toast } from "sonner";
import posthog from "posthog-js";

interface HeaderProps {
  problemId: string;
}

export default function Header({ problemId }: HeaderProps) {
  // 1. Local Loading States
  const [isSaving, setIsSaving] = useState(false);
  const [isLoadingSim, setIsLoadingSim] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);

  // 2. Global Canvas State
  const {
    nodes,
    edges,
    setEvaluationReport,
    playSimulation,
    resetSimulation,
    isSimulating,
  } = useCanvasStore();

  // --- ACTIONS ---

  const handleEvaluate = async () => {
    setIsEvaluating(true);
    const toastId = toast.loading("Evaluating architecture...");

    try {
      const res = await fetch("/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ problemId, nodes, edges }),
      });

      if (!res.ok) throw new Error("Failed to evaluate");

      const report = await res.json();
      setEvaluationReport(report);

      posthog.capture("architecture_evaluated", {
        problem_id: problemId,
        score: report.score,
        node_count: nodes.length,
        edge_count: edges.length,
      });

      toast.success(`Score: ${report.score}/100!`, { id: toastId });
    } catch (error) {
      console.error(error);
      posthog.captureException(error);
      toast.error("Evaluation failed to run.", { id: toastId });
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleSimulate = async () => {
    setIsLoadingSim(true);
    resetSimulation(); // Clear any previous simulation colors
    const toastId = toast.loading("Generating simulation timeline...");

    try {
      const res = await fetch("/api/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ problemId, nodes, edges }),
      });

      if (!res.ok) throw new Error("Simulation failed to generate");

      const timeline = await res.json();
      playSimulation(timeline);

      posthog.capture("simulation_started", {
        problem_id: problemId,
        node_count: nodes.length,
        edge_count: edges.length,
      });

      toast.success("Simulation started!", { id: toastId });
    } catch (error) {
      console.error(error);
      posthog.captureException(error);
      toast.error("Failed to run simulation.", { id: toastId });
    } finally {
      setIsLoadingSim(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    const toastId = toast.loading("Saving architecture to database...");

    try {
      const payload = {
        problemId,
        nodes,
        edges,
        // Optional: you could pull score from the store if you want to save it!
      };

      // Ensure this route matches your actual Next.js API folder structure
      const response = await fetch("/api/designs/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to save");

      posthog.capture("architecture_saved", {
        problem_id: problemId,
        node_count: nodes.length,
        edge_count: edges.length,
      });

      toast.success("Architecture saved successfully!", { id: toastId });
    } catch (error) {
      console.error(error);
      posthog.captureException(error);
      toast.error("Failed to save architecture.", { id: toastId });
    } finally {
      setIsSaving(false);
    }
  };

  // --- RENDER ---

  return (
    <header className="h-14 bg-white border-b border-zinc-200 flex items-center justify-between px-6 z-10 relative shadow-sm">
      <div className="flex items-center gap-4">
        <h1 className="font-semibold text-zinc-900">
          Problem: <span className="text-blue-600">{problemId}</span>
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handleSimulate}
          disabled={isLoadingSim || isSimulating}
          className="px-4 py-1.5 bg-emerald-600 text-white text-sm font-medium rounded-md hover:bg-emerald-700 disabled:opacity-50 transition-colors"
        >
          {isSimulating ? "Simulating..." : "Run Simulation"}
        </button>

        <button
          onClick={handleSave}
          disabled={isSaving}
          className="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {isSaving ? "Saving..." : "Save Architecture"}
        </button>

        <button
          onClick={handleEvaluate}
          disabled={isEvaluating}
          className="px-4 py-1.5 bg-zinc-900 text-white text-sm font-medium rounded-md hover:bg-zinc-800 disabled:opacity-50 transition-colors"
        >
          {isEvaluating ? "Evaluating..." : "Run Evaluation"}
        </button>
      </div>
    </header>
  );
}
