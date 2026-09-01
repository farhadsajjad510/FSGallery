import { Images, FolderOpen, Trash2 } from "lucide-react";

export default function BottomNav({ page, setPage }) {

  const Item = ({ id, icon, text }) => (
    <div
      onClick={() => setPage(id)}
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: page === id ? "#2f80ed" : "#999",
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer"
      }}
    >
      {icon}
      <span style={{ marginTop: 4 }}>{text}</span>
    </div>
  );

  return (
    <nav
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        height: 68,
        background: "#181818",
        borderTop: "1px solid #2c2c2c",
        display: "flex",
        zIndex: 300
      }}
    >
      <Item
        id="photos"
        icon={<Images size={24} />}
        text="Photos"
      />

      <Item
        id="albums"
        icon={<FolderOpen size={24} />}
        text="Albums"
      />

      <Item
        id="trash"
        icon={<Trash2 size={24} />}
        text="Trash"
      />
    </nav>
  );
}
