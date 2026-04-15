// src/components/Loader.jsx
import React from "react";

export default function Loader({ size = 40, className = "", color = "#4F46E5" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className="animate-spin rounded-full border-t-2 border-b-2 border-primary"
        style={{
          width: size,
          height: size,
          borderTopColor: color,
          borderBottomColor: color,
        }}
      />
    </div>
  );
}
