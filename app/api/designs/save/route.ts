// app/api/designs/save/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { DesignGraph } from "@/types";
import { getPostHogClient } from "@/lib/posthog-server";

export async function POST(request: Request) {
  try {
    // 1. Read the JSON payload sent from the frontend
    const body: DesignGraph = await request.json();
    const { problemId, nodes, edges } = body;

    // 2. Validate (Basic check to ensure the payload isn't empty)
    if (!problemId) {
      return NextResponse.json({ error: "Missing problemId" }, { status: 400 });
    }

    // 3. Save to Supabase
    const { data, error } = await supabase
      .from("designs")
      .insert([
        {
          problem_id: problemId,
          nodes: nodes,
          edges: edges,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    // 4. Track design saved event
    const posthog = getPostHogClient();
    posthog.capture({
      distinctId: problemId,
      event: "design_saved",
      properties: {
        problem_id: problemId,
        node_count: nodes?.length ?? 0,
        edge_count: edges?.length ?? 0,
        design_id: data.id,
      },
    });

    return NextResponse.json({ success: true, designId: data.id });
  } catch (error: any) {
    console.error("Save Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
