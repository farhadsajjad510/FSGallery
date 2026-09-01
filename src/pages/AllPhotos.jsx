import { useMemo } from "react";
import { useSearch } from "../components/SearchContext";

export default function AllPhotos() {
  const { search } = useSearch();

  const photos = Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    name: `Photo ${i + 1}`
  }));

  const filtered = useMemo(() => {
    return photos.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

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
      <h2>📷 All Photos ({filtered.length})</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 8,
          marginTop: 15
        }}
      >
        {filtered.map((item) => (
          <div
            key={item.id}
            style={{
              aspectRatio: "1",
              borderRadius: 12,
              background: "linear-gradient(135deg,#2f80ed,#56ccf2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              fontSize: 24
            }}
          >
            🖼️
            <small style={{fontSize:10}}>
              {item.name}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
