// validators/rules/checkSPOF.ts
import { DesignGraph, RuleResult } from "@/types";

export function checkSPOF(graph: DesignGraph): RuleResult {
  // 1. Count how many instances of critical components exist
  const apiServers = graph.nodes.filter((n) => n.data.label === "api-server");
  const databases = graph.nodes.filter((n) => n.data.label === "database");
  const hasLoadBalancer = graph.nodes.some(
    (n) => n.data.label === "load-balancer",
  );
  const spofs = [];

  // 2. Simple SPOF rules: If you only have 1 API server or 1 DB, it's a SPOF.
  if (apiServers.length === 1) {
    spofs.push("API Server (Only 1 instance running)");
  }

  if (databases.length === 1) {
    spofs.push("Database (No read-replicas or standby detected)");
  }

  // 3. Check Load Balancer routing

  if (apiServers.length > 1 && !hasLoadBalancer) {
    spofs.push(
      "Multiple API Servers exist, but no Load Balancer to distribute traffic.",
    );
  }

  if (spofs.length > 0) {
    return {
      passed: false,
      ruleName: "High Availability (SPOF)",
      message: `Single Points of Failure detected: ${spofs.join("; ")}`,
      suggestion: "Add a Load Balancer and duplicate critical nodes (API/DB).",
    };
  }

  return {
    passed: true,
    ruleName: "High Availability (SPOF)",
    message:
      "Architecture is highly available with no obvious single points of failure.",
  };
}
