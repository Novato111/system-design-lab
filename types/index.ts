// types/index.ts

export type ComponentType =
  | "client"
  | "cdn"
  | "api-gateway"
  | "load-balancer"
  | "api-server"
  | "cache"
  | "database"
  | "message-queue";

export interface DesignNode {
  id: string;
  type: ComponentType;
  position: { x: number; y: number };
  data: { label: string };
}

export interface DesignEdge {
  id: string;
  source: string;
  target: string;
}

export interface DesignGraph {
  problemId: string;
  nodes: DesignNode[];
  edges: DesignEdge[];
}
export interface RuleResult {
  passed: boolean;
  ruleName: string;
  message: string;
  suggestion?: string; // Optional, because if they passed, they don't need a suggestion
}

export interface EvaluationReport {
  score: number;
  passed: string[];
  failed: string[];
  suggestions: string[];
}
// types/index.ts (Add to the bottom)

export type SimulationEventType = "traffic" | "latency" | "crash" | "recovery";

export interface SimulationEvent {
  time: number; // At what second should this happen? (e.g., 3)
  nodeId: string; // Which node on the canvas is affected?
  type: SimulationEventType;
  message: string; // What is happening? (e.g., "API Server crashed due to overload")
}

export interface SimulationTimeline {
  duration: number; // Total length of the simulation in seconds
  events: SimulationEvent[];
}
