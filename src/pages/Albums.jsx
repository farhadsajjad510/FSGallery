import { Folder } from "lucide-react";

const albums = [
  "Camera",
  "Screenshots",
  "WhatsApp",
  "Downloads",
  "Telegram",
  "Facebook",
  "Instagram",
  "Pictures"
];

export default function Albums() {
  return (
    <div
      style={{
        padding: 16,
        marginTop: 70,
        marginBottom: 80,
        background: "#111",
        minHeight: "100vh",
        color: "#fff"
      }}
    >
      <h2 style={{ marginBottom: 16 }}>📂 Albums</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 12
        }}
      >
        {albums.map((name) => (
          <div
            key={name}
            style={{
              background: "#1f1f1f",
              borderRadius: 16,
              padding: 18
            }}
          >
            <Folder size={42} color="#2f80ed" />

            <div
              style={{
                marginTop: 12,
                fontWeight: 600
              }}
            >
              {name}
            </div>

            <div
              style={{
                color: "#888",
                fontSize: 13,
                marginTop: 4
              }}
            >
              0 Photos
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
