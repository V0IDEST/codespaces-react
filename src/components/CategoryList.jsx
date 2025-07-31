import React from "react";

function CategoryList({ items }) {
  if (items.length === 0) return <p>Nenhuma categoria encontrada.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((cat, idx) => (
        <li
          key={idx}
          style={{
            background: "#f7f8fa",
            marginBottom: "8px",
            padding: "10px 18px",
            borderRadius: "9px",
            boxShadow: "0 1px 2px 0 #e0e2e4"
          }}
        >
          {cat}
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;