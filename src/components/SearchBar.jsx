import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar por categoria..."
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        padding: "10px",
        borderRadius: "20px",
        border: "1px solid #ddd",
        marginBottom: "20px",
        width: "100%",
        fontSize: "16px"
      }}
    />
  );
}

export default SearchBar;