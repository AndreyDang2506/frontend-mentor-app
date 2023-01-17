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
      <style jsx>
        {`
          .progress-bar::before {
            width: ${percent}%;
          }
        `}
      </style>
    </div>
  );
};

export default StorageDisplay;
