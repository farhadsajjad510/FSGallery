export default function AllPhotos() {
  const items = Array.from({ length: 20 });

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
      <h2 style={{ marginBottom: 15 }}>📷 All Photos</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 8
        }}
      >
        {items.map((_, i) => (
          <div
            key={i}
            style={{
              aspectRatio: "1",
              borderRadius: 12,
              background: "linear-gradient(135deg,#2f80ed,#56ccf2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 28
            }}
          >
            🖼️
          </div>
        ))}
      </div>
    </div>
  );
}
