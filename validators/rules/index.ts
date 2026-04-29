// validators/index.ts
import { DesignGraph, EvaluationReport } from "@/types";
import { checkMissingComponents } from "./checkMissingComponents";
import { checkSPOF } from "./checkSPOF";

export function evaluateArchitecture(graph: DesignGraph): EvaluationReport {
  const rules = [
    checkMissingComponents(graph),
    checkSPOF(graph),
    // You can easily add checkCacheLayer(graph), checkSecurity(graph) later!
  ];

  const passedRules = rules.filter((r) => r.passed);
  const failedRules = rules.filter((r) => !r.passed);

  // Calculate score out of 100
  const score = Math.round((passedRules.length / rules.length) * 100);

  return {
    score,
    passed: passedRules.map((r) => r.message),
    failed: failedRules.map((r) => r.message),
    suggestions: failedRules
      .map((r) => r.suggestion || "")
      .filter((s) => s !== ""),
  };
}
