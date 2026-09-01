export default function Sidebar({ open, onClose, page, setPage }) {
  if (!open) return null;

  const Item = ({ id, icon, title }) => (
    <div
      onClick={() => {
        setPage(id);
        onClose();
      }}
      style={{
        padding: "14px",
        marginBottom: 8,
        borderRadius: 12,
        background: page === id ? "#2f80ed" : "transparent",
        color: "#fff",
        cursor: "pointer",
        fontWeight: "600"
      }}
    >
      {icon} {title}
    </div>
  );

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,.45)",
          zIndex: 200
        }}
      />

      <aside
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          width: 280,
          background: "#171717",
          zIndex: 201,
          padding: 20
        }}
      >
        <h2 style={{ color: "#fff" }}>📷 FS Gallery</h2>

        <div style={{ marginTop: 25 }}>
          <Item id="photos" icon="🖼️" title="All Photos" />
          <Item id="albums" icon="📂" title="Albums" />
          <Item id="videos" icon="🎥" title="Videos" />
          <Item id="favorites" icon="⭐" title="Favorites" />
          <Item id="hidden" icon="🔒" title="Hidden Vault" />
          <Item id="trash" icon="🗑️" title="Trash" />
          <Item id="settings" icon="⚙️" title="Settings" />
          <Item id="about" icon="ℹ️ About" />
        </div>
      </aside>
    </>
  );
}
