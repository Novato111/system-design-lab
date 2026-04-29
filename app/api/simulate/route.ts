// app/api/simulate/route.ts
import { NextResponse } from "next/server";
import { DesignGraph } from "@/types";
import { generateSimulationScript } from "@/validators/simulator";

export async function POST(request: Request) {
  try {
    const graph: DesignGraph = await request.json();

    // Generate the script based on their graph
    const timeline = generateSimulationScript(graph);

    return NextResponse.json(timeline);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
