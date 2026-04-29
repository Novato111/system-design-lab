// validators/rules/checkMissingComponents.ts
import { DesignGraph, RuleResult } from "@/types";
import problems from "@/data/problems.json";

export function checkMissingComponents(graph: DesignGraph): RuleResult {
  const problem = problems.find((p) => p.id === graph.problemId);
  if (!problem)
    return {
      passed: false,
      ruleName: "Required Components",
      message: "Problem not found.",
    };

  const currentTypes = new Set(graph.nodes.map((n) => n.data.label));
  const missing = problem.requiredComponents.filter(
    (req) => !currentTypes.has(req as any),
  );

  if (missing.length > 0) {
    return {
      passed: false,
      ruleName: "Required Components",
      message: `You are missing required components: ${missing.join(", ")}`,
      suggestion: "Drag the missing components onto the canvas.",
    };
  }

  return {
    passed: true,
    ruleName: "Required Components",
    message: "All required core components are present.",
  };
}
