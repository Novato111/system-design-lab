// app/api/designs/[problemId]/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ problemId: string }> },
) {
  try {
    const resolvedParams = await params;
    const problemId = resolvedParams.problemId;

    // Fetch the most recent design for this problem
    const { data, error } = await supabase
      .from("designs")
      .select("nodes, edges")
      .eq("problem_id", problemId)
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (error) {
      // If no design is found, it's not an error, it just means it's a blank canvas
      if (error.code === "PGRST116") {
        return NextResponse.json({ nodes: [], edges: [] });
      }
      throw error;
    }

    return NextResponse.json({ nodes: data.nodes, edges: data.edges });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
