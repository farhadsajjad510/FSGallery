import { useState } from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import Sidebar from "../components/Sidebar";

import AllPhotos from "../pages/AllPhotos";
import Albums from "../pages/Albums";
import Trash from "../pages/Trash";

export default function MainLayout() {
  const [page, setPage] = useState("photos");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <TopBar onMenu={() => setMenuOpen(true)} />

      {page === "photos" && <AllPhotos />}
      {page === "albums" && <Albums />}
      {page === "trash" && <Trash />}

      <BottomNav page={page} setPage={setPage} />

      <Sidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
