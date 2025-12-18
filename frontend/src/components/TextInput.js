// src/components/TextInput.jsx
import React from "react";

const TextInput = ({ value, onChange, rows = 6 }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      rows={rows}
      style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      placeholder="Enter your message here..."
    />
  );
};

export default TextInput;
