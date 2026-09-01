import { Menu, Search } from "lucide-react";

export default function TopBar({ onMenu }) {
  return (
    <header style={{
      height:60,
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      padding:"0 16px",
      borderBottom:"1px solid #222",
      background:"#111",
      position:"fixed",
      top:0,
      left:0,
      right:0,
      zIndex:100
    }}>
      <button onClick={onMenu}>
        <Menu size={24}/>
      </button>

      <h2>FS Gallery</h2>

      <button>
        <Search size={22}/>
      </button>
    </header>
  );
}
