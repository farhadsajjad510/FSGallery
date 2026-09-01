export default function Sidebar({ open, onClose }) {

  if(!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position:"fixed",
          inset:0,
          background:"rgba(0,0,0,.45)",
          zIndex:200
        }}
      />

      <aside style={{
        position:"fixed",
        left:0,
        top:0,
        bottom:0,
        width:270,
        background:"#171717",
        zIndex:201,
        padding:20
      }}>
        <h2>FS Gallery</h2>

        <br/>

        <p>⭐ Favorites</p>
        <p>🔒 Hidden</p>
        <p>🎥 Videos</p>
        <p>⬇ Downloads</p>

        <br/>

        <p>⚙ Settings</p>
        <p>ℹ About</p>
      </aside>
    </>
  );
}
