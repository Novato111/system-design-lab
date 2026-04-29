// app/api/evaluate/route.ts
import { NextResponse } from "next/server";
import { DesignGraph } from "@/types";
import { evaluateArchitecture } from "@/validators/rules";

export async function POST(request: Request) {
  try {
    const graph: DesignGraph = await request.json();

    // Run the engine
    const report = evaluateArchitecture(graph);

    // In a real app, you might save this report to Supabase here too!
    return NextResponse.json(report);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
