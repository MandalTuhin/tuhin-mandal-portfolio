import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";


// Image generation
export async function GET() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background:
            "linear-gradient(to bottom right, #111827, #1f2937, #374151)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div style={{ fontSize: 84, fontWeight: "bold" }}>Tuhin Mandal</div>
        <div style={{ fontSize: 48, marginTop: 20, color: "#d1d5db" }}>
          Backend Developer
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 24,
            color: "#9ca3af",
          }}
        >
          tuhin-mandal-portfolio.vercel.app
        </div>
      </div>
    ),
    // ImageResponse options
    {
      width: 1200,
      height: 630,
    }
  );
}