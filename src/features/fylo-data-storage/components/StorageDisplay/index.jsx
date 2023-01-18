import React from "react";

const StorageDisplay = (props) => {
  const { from, to, percent } = props;
  return (
    <div className="storage-display">
      <div className="progress-bar"></div>
      <div className="data-display">
        <span>{from} GB</span>
        <span>{to} GB</span>
      </div>
      <style jsx="true">
        {`
          .progress-bar::before {
            width: ${percent || 0}%;
          }
        `}
      </style>
    </div>
  );
};

export default StorageDisplay;
