import React from "react";

function DataBubble(props) {
  const { leftData } = props;
  return (
    <div className="data-bubble">
      <p className="data-bubble-text">
        <span>{leftData || 0}</span>
        GB Left
      </p>
    </div>
  );
}

export default DataBubble;
