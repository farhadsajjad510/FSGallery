import { Menu, Search, Settings2 } from "lucide-react";
import { useSearch } from "./SearchContext";

export default function TopBar({ onMenu }) {
  const { search, setSearch } = useSearch();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 64,
        background: "#181818",
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        zIndex: 300,
        boxShadow: "0 2px 10px rgba(0,0,0,.35)"
      }}
    >
      <button
        onClick={onMenu}
        style={{
          background: "none",
          border: "none",
          color: "#fff"
        }}
      >
        <Menu size={26}/>
      </button>

      <div
        style={{
          flex:1,
          margin:"0 14px",
          display:"flex",
          alignItems:"center",
          background:"#2b2b2b",
          borderRadius:16,
          padding:"10px 14px"
        }}
      >
        <Search size={20} color="#aaa"/>

        <input
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search photos..."
          style={{
            flex:1,
            marginLeft:10,
            border:"none",
            outline:"none",
            background:"transparent",
            color:"#fff",
            fontSize:15
          }}
        />
      </div>

      <button
        style={{
          background:"none",
          border:"none",
          color:"#fff"
        }}
      >
        <Settings2 size={24}/>
      </button>
    </header>
  );
}
