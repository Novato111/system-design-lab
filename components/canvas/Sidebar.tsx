// components/canvas/Sidebar.tsx
"use client";

import { ComponentType } from "@/types";

const COMPONENTS: { type: ComponentType; label: string }[] = [
  { type: "client", label: "Client" },
  { type: "cdn", label: "CDN" },
  { type: "api-gateway", label: "API Gateway" },
  { type: "load-balancer", label: "Load Balancer" },
  { type: "api-server", label: "API Server" },
  { type: "cache", label: "Cache" },
  { type: "database", label: "Database" },
  { type: "message-queue", label: "Message Queue" },
];

export default function Sidebar() {
  // Native HTML5 Drag and Drop handler
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="w-64 bg-white border-r border-zinc-200 p-4 h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-zinc-900">Components</h2>
        <p className="text-xs text-zinc-500 mt-1">Drag and drop to canvas</p>
      </div>

      <div className="space-y-3 flex-1 overflow-y-auto">
        {COMPONENTS.map((comp) => (
          <div
            key={comp.type}
            onDragStart={(event) => onDragStart(event, comp.type)}
            draggable
            className="p-3 border border-zinc-200 rounded-md bg-zinc-50 cursor-grab hover:border-blue-500 hover:bg-blue-50 transition-colors text-sm font-medium text-zinc-700"
          >
            {comp.label}
          </div>
        ))}
      </div>
    </aside>
  );
}
