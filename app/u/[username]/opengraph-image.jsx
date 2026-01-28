import { ImageResponse } from "next/og";
export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OgImage({ params }) {
  const { username } = await params;

  const imageData = await fetch(new URL('../../../public/nobglogo.png', import.meta.url)).then(
    (res) => res.arrayBuffer()
  );

  return new ImageResponse(
    (
      <div style={{
        width: "100%",
        height: "100%",
        background: "#1a1322",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        position: "relative",
        fontFamily: "sans-serif",
      }}>
        {/* Background Gradient/Glow */}
        <div style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle, rgba(142, 70, 236, 0.15) 0%, transparent 50%)",
        }} />

        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 30 }}>
          {/* <img src={imageData} width="60" height="60" style={{ marginRight: 20 }} /> */}
          <span style={{
            fontSize: 40,
            fontWeight: "bolder",
            color: "#8f48ec",
            display: "flex", // Explicit display flex for text container safety
          }}>
            Textcognito
          </span>
        </div>

        {/* Headline */}
        {/* <div style={{
          display: "flex", // REQUIRED: Explicit display flex
          textAlign: "center",
          padding: "0 60px",
          fontSize: 80,
          fontWeight: 900,
          lineHeight: 1.1,
          background: "linear-gradient(to bottom, #fff, #a8a8a8)",
          backgroundClip: "text",
          color: "transparent",
        }}>
          @{username}
        </div> */}

        {/* CTA */}
        <div style={{
          display: "flex", // REQUIRED: Explicit display flex
          marginTop: 40,
          fontSize: 32,
          color: "#9d50f3",
          fontWeight: 600,
        }}>
          Send {username} an anonymous message →
        </div>
      </div>
    ),
    size
  );
}
