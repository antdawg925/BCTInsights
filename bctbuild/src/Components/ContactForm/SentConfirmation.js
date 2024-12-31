import React from "react";

const SentConfirmation = ({ status, clearStatus }) => {
  return (
    <div id="SentConfirmation">
      <button id="ConfirmationButton" onClick={clearStatus}>
        &times;
      </button>
      <p id="ContactStatus">{status}</p>
    </div>
  );
};

export default SentConfirmation;
