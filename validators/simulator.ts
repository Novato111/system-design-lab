// validators/simulator.ts
import { DesignGraph, SimulationTimeline, SimulationEvent } from "@/types";

export function generateSimulationScript(
  graph: DesignGraph,
): SimulationTimeline {
  const events: SimulationEvent[] = [];

  // 1. Identify key components
  const clients = graph.nodes.filter((n) => n.data.label === "client");
  const loadBalancers = graph.nodes.filter(
    (n) => n.data.label === "load-balancer",
  );
  const apiServers = graph.nodes.filter((n) => n.data.label === "api-server");
  const databases = graph.nodes.filter((n) => n.data.label === "database");
  const caches = graph.nodes.filter((n) => n.data.label === "cache");

  // No clients? Nothing to simulate.
  if (clients.length === 0) {
    return { duration: 5, events: [] };
  }

  // EVENT T=1: Initial Traffic starts at the Client
  clients.forEach((client) => {
    events.push({
      time: 1,
      nodeId: client.id,
      type: "traffic",
      message: "User traffic spiking to 10k req/sec",
    });
  });

  // EVENT T=2: Traffic hits Load Balancer (or API directly)
  if (loadBalancers.length > 0) {
    loadBalancers.forEach((lb) => {
      events.push({
        time: 2,
        nodeId: lb.id,
        type: "traffic",
        message: "Load Balancer distributing traffic smoothly",
      });
    });
  }

  // EVENT T=3: API Server Behavior
  if (apiServers.length > 0) {
    // If they have no load balancer and only 1 API server, CRASH IT!
    if (loadBalancers.length === 0 && apiServers.length === 1) {
      events.push({
        time: 3,
        nodeId: apiServers[0].id,
        type: "crash",
        message: "API Server overloaded by direct traffic. CRASHED.",
      });
    } else {
      // Otherwise, it handles the traffic
      apiServers.forEach((api) => {
        events.push({
          time: 3,
          nodeId: api.id,
          type: "traffic",
          message: "API Server processing requests",
        });
      });
    }
  }

  // EVENT T=4: Database Behavior
  if (databases.length > 0) {
    // If they have no cache, the DB gets hammered
    if (caches.length === 0) {
      events.push({
        time: 4,
        nodeId: databases[0].id,
        type: "latency",
        message:
          "Database bottleneck. No cache layer detected. Queries slowing down.",
      });
    } else {
      events.push({
        time: 4,
        nodeId: caches[0].id,
        type: "traffic",
        message: "Cache hit! Saving database load.",
      });
      events.push({
        time: 5,
        nodeId: databases[0].id,
        type: "recovery",
        message: "Database load normal.",
      });
    }
  }

  // Sort events by time just in case, and set a duration
  events.sort((a, b) => a.time - b.time);
  const duration =
    events.length > 0 ? Math.max(...events.map((e) => e.time)) + 2 : 5;

  return { duration, events };
}
