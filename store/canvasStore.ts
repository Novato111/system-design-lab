// store/canvasStore.ts
import { create } from "zustand";
import { SimulationTimeline } from "@/types";
import {
  Node,
  Edge,
  Connection,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  NodeChange,
  EdgeChange,
} from "reactflow";
import { ComponentType } from "@/types";

export interface FeedbackItem {
  category: string;
  type: "success" | "warning" | "critical";
  message: string;
}

export interface EvaluationReport {
  score: number;
  detectedPaths: string[];
  feedback: FeedbackItem[];
}
interface CanvasState {
  nodes: Node[];
  edges: Edge[];
  // React Flow requires these specific functions to handle moving and connecting things
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
  addNode: (type: ComponentType, position: { x: number; y: number }) => void;
  evaluationReport: EvaluationReport | null;

  setEvaluationReport: (report: EvaluationReport) => void;
  setGraph: (nodes: Node[], edges: Edge[]) => void;

  simulationMessage: string | null;
  isSimulating: boolean;
  playSimulation: (timeline: SimulationTimeline) => void;
  resetSimulation: () => void;
}

export const useCanvasStore = create<CanvasState>((set, get) => ({
  nodes: [],
  edges: [],
  evaluationReport: null,
  setEvaluationReport: (report) => set({ evaluationReport: report }),
  // Handles dragging nodes around the screen
  onNodesChange: (changes) => {
    set({ nodes: applyNodeChanges(changes, get().nodes) });
  },

  // Handles deleting or modifying edges (the lines between nodes)
  onEdgesChange: (changes) => {
    set({ edges: applyEdgeChanges(changes, get().edges) });
  },

  // Handles drawing a new line between two nodes
  onConnect: (connection) => {
    set({ edges: addEdge(connection, get().edges) });
  },

  // Handles dropping a new component onto the canvas
  addNode: (type, position) => {
    const newNode: Node = {
      id: `${type}-${Date.now()}`, // Generate a unique ID
      type: "default", // We will build custom nodes later, using default for now
      position,
      data: { label: type }, // Display the type name on the node
    };
    set({ nodes: [...get().nodes, newNode] });
  },
  setGraph: (nodes, edges) => set({ nodes, edges, evaluationReport: null }),

  simulationMessage: null,
  isSimulating: false,

  playSimulation: (timeline) => {
    // Prevent running multiple simulations at once
    if (get().isSimulating) return;

    set({ isSimulating: true, simulationMessage: "Starting simulation..." });
    let currentTime = 0;
    const { events, duration } = timeline;

    const interval = setInterval(() => {
      currentTime++;

      // Find all events meant for this exact second
      const currentEvents = events.filter((e) => e.time === currentTime);

      if (currentEvents.length > 0) {
        set((state) => {
          // 1. Update the message on the screen to the most recent event message
          const latestMessage = currentEvents[currentEvents.length - 1].message;

          // 2. Change the colors of the affected nodes
          const newNodes = state.nodes.map((node) => {
            const eventForNode = currentEvents.find(
              (e) => e.nodeId === node.id,
            );
            if (eventForNode) {
              // Determine color based on event type
              let bgColor = "#ffffff";
              let borderColor = "#e4e4e7"; // zinc-200

              if (eventForNode.type === "crash") {
                bgColor = "#fee2e2";
                borderColor = "#ef4444";
              } // Red
              else if (eventForNode.type === "traffic") {
                bgColor = "#dcfce7";
                borderColor = "#22c55e";
              } // Green
              else if (eventForNode.type === "latency") {
                bgColor = "#fef08a";
                borderColor = "#eab308";
              } // Yellow
              else if (eventForNode.type === "recovery") {
                bgColor = "#ffffff";
                borderColor = "#e4e4e7";
              } // Normal

              // React Flow automatically reads the "style" object to color the node!
              return {
                ...node,
                style: {
                  backgroundColor: bgColor,
                  borderColor,
                  borderWidth: "2px",
                  transition: "all 0.3s ease",
                },
              };
            }
            return node;
          });

          return { nodes: newNodes, simulationMessage: latestMessage };
        });
      }

      // Stop the simulation when the movie is over
      if (currentTime >= duration) {
        clearInterval(interval);
        setTimeout(() => {
          set({
            isSimulating: false,
            simulationMessage: "Simulation Complete",
          });
          // Optional: You could call get().resetSimulation() here to auto-reset colors
        }, 2000);
      }
    }, 1000); // Tick every 1000ms (1 second)
  },

  resetSimulation: () => {
    set((state) => ({
      simulationMessage: null,
      isSimulating: false,
      // Strip the custom colors off all nodes to return to normal
      nodes: state.nodes.map((node) => ({ ...node, style: undefined })),
    }));
  },
}));
