import { streamText } from "ai";
import { google } from "@ai-sdk/google";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Extract data safely with rock-solid fallbacks
    const messages = body.messages || [];
    const nodes = body.nodes || [];
    const edges = body.edges || [];
    const evaluationReport = body.evaluationReport;
    const problemId = body.problemId || "unknown";

    // 2. Safely extract canvas data for the prompt
    const nodeNames =
      nodes.length > 0
        ? nodes.map((n: any) => n.data?.label || "unknown").join(", ")
        : "None";

    const systemPrompt = `
      You are an elite System Design Interview Coach.
      The user is solving the problem: "${problemId}".
      
      CURRENT CANVAS STATE:
      - Components on board: ${nodeNames}
      - Total connections: ${edges.length}
      - Evaluation Score: ${evaluationReport ? evaluationReport.score + "/100" : "Not evaluated yet"}
      - Failed Rules: ${evaluationReport && evaluationReport.failed.length > 0 ? evaluationReport.failed.join("; ") : "None"}

      YOUR RULES:
      1. Be concise. Give short, punchy advice.
      2. Act like an interviewer giving a hint. Do not just give them the answer.
      3. Directly reference the specific components they have placed on their board.
    `;

    // 3. THE BULLETPROOF MANUAL CONVERSION
    // We bypass the buggy Vercel helper function and build the exact array Gemini expects.
    const cleanMessages = messages.map((m: any) => {
      let text = m.content || "";
      // Sometimes the frontend nests the text inside a "parts" array instead of "content"
      if (!text && m.parts) {
        text = m.parts.map((p: any) => p.text || "").join("");
      }
      return {
        role: m.role === "user" ? "user" : "assistant",
        content: text,
      };
    });

    console.log("SENDING CLEAN MESSAGES:", cleanMessages.length);

    // 4. Send to Gemini (No 'await' here!)
    const result = streamText({
      model: google("gemini-2.5-flash"),
      system: systemPrompt,
      messages: cleanMessages,
    });

    // 5. Return the open stream (Use whichever method your SDK version recognizes)
    return result.toDataStreamResponse
      ? result.toDataStreamResponse()
      : (result as any).toUIMessageStreamResponse();
  } catch (error: any) {
    console.error("AI ROUTE ERROR:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
