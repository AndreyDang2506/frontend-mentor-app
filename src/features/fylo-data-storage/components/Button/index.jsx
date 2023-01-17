import React from "react";

function FyloBtn(props) {
  const { icon } = props;

  return (
    <button aria-label="Info">
      <img src={icon} alt="" aria-hidden="true" />
    </button>
  );
}

export default FyloBtn;
