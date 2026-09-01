import { Images, FolderOpen, Trash2 } from "lucide-react";

export default function BottomNav({ page, setPage }) {

  const item = (id, icon, label) => (
    <button
      onClick={() => setPage(id)}
      style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        color: page===id ? "#4F8CFF" : "#888"
      }}
    >
      {icon}
      <small>{label}</small>
    </button>
  );

  return (
    <nav style={{
      position:"fixed",
      bottom:0,
      left:0,
      right:0,
      height:65,
      background:"#111",
      borderTop:"1px solid #222",
      display:"flex",
      justifyContent:"space-around",
      alignItems:"center"
    }}>
      {item("photos",<Images size={22}/>,"Photos")}
      {item("albums",<FolderOpen size={22}/>,"Albums")}
      {item("trash",<Trash2 size={22}/>,"Trash")}
    </nav>
  );
}
