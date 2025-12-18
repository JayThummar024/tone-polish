// src/components/Button.jsx
import React from "react";

const Button = ({ onClick, children, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: disabled ? "not-allowed" : "pointer",
        marginTop: "10px",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
