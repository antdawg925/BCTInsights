import React from "react";

const SentConfirmation = ({ status, clearStatus }) => {
  return (
    <div
      style={{
        // position: "relative",
        // top: "10%",
        // left: "50%",
        transform: "translate(-50%, -10%)",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <button
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontSize: "20px",
        }}
        onClick={clearStatus}
      >
        &times;
      </button>
      <p>{status}</p>
    </div>
  );
};

export default SentConfirmation;
