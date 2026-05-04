// app/api/evaluate/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { problemId, nodes, edges } = await req.json();

    const feedback: any[] = [];
    let score = 100;

    // 1. Translation Dictionary
    const nodeTypes: Record<string, string> = {};
    nodes.forEach((n: any) => {
      nodeTypes[n.id] = n.data?.label || "unknown";
    });

    // 2. Adjacency List (For Graph Traversal)
    const adjList: Record<string, string[]> = {};
    edges.forEach((edge: any) => {
      if (!adjList[edge.source]) adjList[edge.source] = [];
      adjList[edge.source].push(edge.target);
    });

    const isConnected = (sourceType: string, targetType: string) => {
      return edges.some(
        (e: any) =>
          (nodeTypes[e.source] === sourceType &&
            nodeTypes[e.target] === targetType) ||
          (nodeTypes[e.source] === targetType &&
            nodeTypes[e.target] === sourceType),
      );
    };
    const hasComponent = (type: string) =>
      Object.values(nodeTypes).includes(type);

    // ==========================================
    // THE X-RAY: PATH DETECTION (DFS Algorithm)
    // ==========================================
    const detectedPaths: string[] = [];
    const clientNodes = nodes.filter((n: any) => nodeTypes[n.id] === "client");

    clientNodes.forEach((client: any) => {
      const explore = (
        nodeId: string,
        currentPath: string[],
        visited: Set<string>,
      ) => {
        const type = nodeTypes[nodeId];
        currentPath.push(type);

        if (visited.has(nodeId)) {
          detectedPaths.push(
            currentPath.join(" ➔ ") + " (Infinite Loop Detected!)",
          );
          return;
        }

        visited.add(nodeId);
        const neighbors = adjList[nodeId] || [];

        if (neighbors.length === 0) {
          detectedPaths.push(currentPath.join(" ➔ "));
        } else {
          neighbors.forEach((n) =>
            explore(n, [...currentPath], new Set(visited)),
          );
        }
      };
      explore(client.id, [], new Set());
    });

    if (detectedPaths.length === 0 && clientNodes.length === 0) {
      detectedPaths.push("No client detected. Where does the traffic start?");
    }

    // ==========================================
    // CATEGORIZED RULES ENGINE
    // ==========================================

    // Rule 1: Security
    if (isConnected("client", "database")) {
      feedback.push({
        category: "Security",
        type: "critical",
        message:
          "Client connects directly to the Database. This is a massive security vulnerability.",
      });
      score -= 40;
    } else if (hasComponent("client") && hasComponent("database")) {
      feedback.push({
        category: "Security",
        type: "success",
        message: "Client is properly isolated from the data layer.",
      });
    }

    // Rule 2: Routing
    if (
      isConnected("client", "api-gateway") ||
      isConnected("client", "load-balancer")
    ) {
      feedback.push({
        category: "Routing",
        type: "success",
        message: "Traffic securely routes through a Gateway/Load Balancer.",
      });
    } else {
      feedback.push({
        category: "Routing",
        type: "warning",
        message:
          "Client connects directly to backend servers. Consider an API Gateway.",
      });
      score -= 20;
    }

    // Rule 3: Performance (Cache)
    if (
      isConnected("api-server", "cache") ||
      isConnected("database", "cache")
    ) {
      feedback.push({
        category: "Performance",
        type: "success",
        message: "Cache layer is perfectly placed to reduce latency.",
      });
    } else if (hasComponent("cache")) {
      feedback.push({
        category: "Performance",
        type: "warning",
        message: "Cache exists on the board but isn't connected properly.",
      });
      score -= 15;
    } else {
      feedback.push({
        category: "Performance",
        type: "warning",
        message:
          "Missing a caching layer (e.g., Redis). Database will crash under heavy load.",
      });
      score -= 20;
    }

    // Rule 4: Floating Components
    const connectedNodeIds = new Set();
    edges.forEach((edge: any) => {
      connectedNodeIds.add(edge.source);
      connectedNodeIds.add(edge.target);
    });
    const floatingNodes = nodes.filter((n: any) => !connectedNodeIds.has(n.id));

    if (floatingNodes.length > 0) {
      feedback.push({
        category: "Architecture",
        type: "critical",
        message: `You have ${floatingNodes.length} floating components completely disconnected from the system.`,
      });
      score -= 10 * floatingNodes.length;
    }

    score = Math.max(0, score);

    return NextResponse.json({ score, detectedPaths, feedback });
  } catch (error: any) {
    console.error("Evaluation Error:", error);
    return NextResponse.json(
      { error: "Failed to evaluate architecture" },
      { status: 500 },
    );
  }
}
