import { streamText } from "ai";
import { google } from "@ai-sdk/google";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const messages = body.messages || [];
    const nodes = body.nodes || [];
    const edges = body.edges || [];
    const evaluationReport = body.evaluationReport;
    const problemId = body.problemId || "unknown";

    // Format the board state for the AI
    const componentsOnBoard =
      nodes.length > 0
        ? nodes.map((n: any) => n.label).join(", ")
        : "No components placed yet.";

    const systemPrompt = `
      You are an elite, strict, but helpful Senior Staff Engineer conducting a System Design Interview.
      The candidate is solving the problem: "${problemId.toUpperCase()}".
      
      CURRENT ARCHITECTURE STATE:
      - Components on board: ${componentsOnBoard}
      - Total Connections: ${edges.length}
      - Evaluation Score: ${evaluationReport ? evaluationReport.score + "/100" : "Not evaluated yet"}

      YOUR RULES:
      1. YOU CAN SEE THE BOARD. If they have components, reference them directly. 
      2. NEVER give them the exact answer. Give them Socratic hints.
      3. Keep your answers concise and punchy. Maximum 3 short paragraphs.
    `;

    // Ensure strict format for Gemini
    const cleanMessages = messages.map((m: any) => ({
      role: m.role === "user" ? "user" : "assistant",
      content: m.content || "",
    }));

    const result = streamText({
      model: google("gemini-3-flash-preview"),
      system: systemPrompt,
      messages: cleanMessages,
    });

    console.log(
      "🚀 [BACKEND] Stream created successfully. Returning response to frontend.",
    );
    return result.toTextStreamResponse();
  } catch (error: any) {
    console.error("AI ROUTE ERROR:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
