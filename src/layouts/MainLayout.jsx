import { useState } from "react";

import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import Sidebar from "../components/Sidebar";

import AllPhotos from "../pages/AllPhotos";
import Albums from "../pages/Albums";
import Trash from "../pages/Trash";

function Placeholder({ title }) {
  return (
    <div
      style={{
        padding: 20,
        marginTop: 70,
        marginBottom: 80,
        color: "#fff",
        background: "#111",
        minHeight: "100vh"
      }}
    >
      <h2>{title}</h2>
      <p style={{ color: "#888" }}>Coming Soon...</p>
    </div>
  );
}

export default function MainLayout() {
  const [page, setPage] = useState("photos");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <TopBar onMenu={() => setMenuOpen(true)} />

      {page === "photos" && <AllPhotos />}
      {page === "albums" && <Albums />}
      {page === "trash" && <Trash />}
      {page === "favorites" && <Placeholder title="⭐ Favorites" />}
      {page === "videos" && <Placeholder title="🎥 Videos" />}
      {page === "hidden" && <Placeholder title="🔒 Hidden Vault" />}
      {page === "settings" && <Placeholder title="⚙️ Settings" />}
      {page === "about" && <Placeholder title="ℹ️ About" />}

      <BottomNav page={page} setPage={setPage} />

      <Sidebar
        open={menuOpen}
        page={page}
        setPage={setPage}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
