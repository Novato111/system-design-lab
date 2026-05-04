"use client";

// 1. Added useState to your imports
import { use, useCallback, useEffect, useRef, useState } from "react";
import ReactFlow, { Background, Controls, ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";

import Sidebar from "@/components/canvas/Sidebar";
import Header from "@/components/canvas/Header";
import { useCanvasStore } from "@/store/canvasStore";
import { ComponentType } from "@/types";
import TutorPanel from "@/components/canvas/TutorPanel";
// Removed Chat import as it seemed unused in your JSX, add back if needed!

export default function CanvasPage({
  params,
}: {
  params: Promise<{ problemId: string }>;
}) {
  const resolvedParams = use(params);
  const problemId = resolvedParams.problemId;

  // 2. Add our hydration and loading states
  const [isMounted, setIsMounted] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    addNode,
    setGraph,
  } = useCanvasStore();
  const evaluationReport = useCanvasStore((state) => state.evaluationReport);
  const simulationMessage = useCanvasStore((state) => state.simulationMessage);

  // 3. Update the Effect to handle mounting and loading UI
  useEffect(() => {
    setIsMounted(true); // Tell React the client has mounted

    const fetchSavedDesign = async () => {
      try {
        const response = await fetch(`/api/designs/${problemId}`);
        if (response.ok) {
          const data = await response.json();
          if (data.nodes && data.nodes.length > 0) {
            setGraph(data.nodes, data.edges);
          }
        }
      } catch (error) {
        console.error("Failed to load design:", error);
      } finally {
        setIsLoadingData(false); // Turn off the loading spinner
      }
    };

    fetchSavedDesign();
  }, [problemId, setGraph]);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData(
        "application/reactflow",
      ) as ComponentType;
      if (!type) return;

      const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
      if (!reactFlowBounds) return;

      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      };

      addNode(type, position);
    },
    [addNode],
  );

  // 4. THE HYDRATION GUARD
  // Crucially, this must sit below ALL hooks (useState, useRef, useCallback, useEffect)
  if (!isMounted || isLoadingData) {
    return (
      <div className="flex flex-col h-screen w-screen items-center justify-center bg-zinc-50">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <div className="text-zinc-500 font-mono text-sm animate-pulse">
          Loading Workspace...
        </div>
      </div>
    );
  }

  // 5. Main Render
  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-50 overflow-hidden">
      <Header problemId={problemId} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 h-full relative" ref={reactFlowWrapper}>
          <ReactFlowProvider>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
            >
              <Background color="#ccc" gap={16} />
              <Controls />
            </ReactFlow>
          </ReactFlowProvider>
          {simulationMessage && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-zinc-900 text-white px-6 py-3 rounded-full shadow-lg border border-zinc-700 font-mono text-sm flex items-center gap-3 animate-fade-in-up">
              <div
                className={`w-2 h-2 rounded-full ${
                  simulationMessage.includes("CRASHED")
                    ? "bg-red-500 animate-pulse"
                    : simulationMessage.includes("latency")
                      ? "bg-yellow-500 animate-pulse"
                      : "bg-green-500 animate-pulse"
                }`}
              />
              {simulationMessage}
            </div>
          )}
        </main>

        {/* Evaluation Sidebar */}
        {/* Evaluation Sidebar */}
        <aside className="w-80 mr-80  bg-red-900 border-l border-zinc-200 p-6 h-full hidden xl:flex flex-col z-10 relative shadow-[-4px_0_15px_rgba(0,0,0,0.03)] overflow-y-auto">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Evaluation</h2>

          {evaluationReport ? (
            <div className="space-y-6">
              {/* Score Display */}
              <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200 text-center">
                <div className="text-sm font-medium text-zinc-500 mb-1">
                  Architecture Score
                </div>
                <div
                  className={`text-4xl font-bold ${
                    evaluationReport.score === 100
                      ? "text-green-600"
                      : evaluationReport.score > 50
                        ? "text-orange-500"
                        : "text-red-500"
                  }`}
                >
                  {evaluationReport.score}/100
                </div>
              </div>

              {/* The X-Ray: Detected Paths */}
              <div>
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  Detected Traffic Flow
                </h3>
                <div className="space-y-2 bg-zinc-900 text-green-400 p-3 rounded-md font-mono text-xs overflow-x-auto">
                  {evaluationReport.detectedPaths.map(
                    (path: string, i: number) => (
                      <div key={i} className="whitespace-nowrap">
                        {">"} {path}
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Categorized Feedback Linter */}
              <div>
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  Analysis Report
                </h3>
                <div className="space-y-3">
                  {evaluationReport.feedback.map((item: any, i: number) => (
                    <div
                      key={i}
                      className={`p-3 rounded-md border text-sm flex flex-col gap-1
                      ${
                        item.type === "critical"
                          ? "bg-red-50 border-red-200 text-red-800"
                          : item.type === "warning"
                            ? "bg-orange-50 border-orange-200 text-orange-800"
                            : "bg-green-50 border-green-200 text-green-800"
                      }`}
                    >
                      <div className="flex items-center gap-2 font-bold text-xs uppercase opacity-80">
                        <span
                          className={`w-2 h-2 rounded-full ${item.type === "critical" ? "bg-red-500" : item.type === "warning" ? "bg-orange-500" : "bg-green-500"}`}
                        ></span>
                        {item.category}
                      </div>
                      <div>{item.message}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-center">
              <p className="text-sm text-zinc-500">
                Click Run Evaluation to analyze your architecture.
              </p>
            </div>
          )}
        </aside>

        {/* AI Tutor Panel */}
        <TutorPanel problemId={problemId} />
      </div>
    </div>
  );
}
